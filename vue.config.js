const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
          @import "@/assets/scss/variable.scss";
          @import "@/assets/scss/mixin.scss";
        `
      }
    }
  },
  devServer: {
    // Express 实例
    onBeforeSetupMiddleware(devServer) {
      console.log('1111111111', devServer)
      registerRouter(devServer.app)
    }
  }
}
