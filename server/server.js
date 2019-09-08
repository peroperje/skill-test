const XLSX = require('xlsx');
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

server.use(function(req, res, next){
  setTimeout(next,2500);
});

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

server.get('/read/:id', function(req, res) {
  const db = router.db;
  const { id } = req.params;

  const file = db
    .get('files')
    .find({ id: parseInt(id, 10) })
    .value();

  if (!file) {
    res.status(401).jsonp('File not found');
  }

  const workbook = XLSX.readFile(path.join(__dirname, 'files', file.download));
  const sheet_name_list = workbook.SheetNames;
  sheet_name_list.forEach(function(y) {
    const worksheet = workbook.Sheets[y];
    let headers = {};
    let data = [];
    for (z in worksheet) {
      if (z[0] === '!') continue;
      //parse out the column, row, and value
      let col = z.substring(0, 1);
      let row = parseInt(z.substring(1));
      let value = worksheet[z].v;

      //store header names
      if (row == 1) {
        headers[col] = value;
        continue;
      }

      if (!data[row]) data[row] = {};
      data[row][headers[col]] = value;

    }
    data.shift();
    data.shift();
    res.status(200).jsonp(data);
  });


});

server.use(router);
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
