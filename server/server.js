const path = require('path');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const fileUpload = require('express-fileupload');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(fileUpload());
server.use(bodyParser.json()); // support json encoded bodies
server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

server.post('/files', function(req, res, next) {
  let time = new Date().getTime();
  let sampleFile = req.files.file;
  let name = req.files.file.name;
  let uName = `${time}-${name}`.split(' ').join('-');
  sampleFile.mv(path.join(__dirname, 'files', uName), function(err) {
    if (err) {
      return res.status(500).send(err);
    }
    req.body.updateAt = time;
    req.body.name = name;
    req.body.download = uName;
    next();
  });
});

server.get('/download/:fileName', function(req, res) {
  const file = `${__dirname}/files/${req.params.fileName}`;
  res.download(file);
});

server.post('/login', function(req, res) {
  const db = router.db;
  const { email } = req.body;

  const user = db
    .get('users')
    .find({ email })
    .value();
  if (user) {
    res.status(200).jsonp({
      accessToken: 'b08f86af-35da-48f2-8fab-cef3904660bd',
      user
    });
  } else {
    res.status(401).jsonp('User not found');
  }
});

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
