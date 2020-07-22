const webpack = require('@cypress/webpack-preprocessor');

module.exports = (on) => {
  const options = {
    webpackOptions: {
      resolve: {
        extensions: ['.ts', '.tsx', '.js'],
      },
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: [/node_modules/],
            use: [{
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            }],
          },
        ],
      },
    }
  }

  on('file:preprocessor', webpack(options));
};