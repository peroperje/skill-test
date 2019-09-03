module.exports = {
  components: 'src/UI/**/*.ts?(x)',
  propsParser: require("react-docgen-typescript").withDefaultConfig({
    propFilter: (props) => {
      if (props.parent) {
        return !props.parent.fileName.includes('node_modules/@types/react')
      }

      return true
    }
  }).parse
};
