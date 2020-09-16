module.exports = {
  lintOnSave: 'warning',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import "@/scss/variables.scss";
        `
      }
    }
  },
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'ProjectName';
      args[0].meta = { description: 'A single page application created using Vue.js 3 and Typescript' };
      return args;
    });
  },
  devServer: {
    proxy: 'http://192.168.91.129:3000'
  }
};
