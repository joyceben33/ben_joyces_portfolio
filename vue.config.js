module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ?'/<REPO>/'
  : '/',
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    port: 3000
  }
};
