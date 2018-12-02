const path = require('path');

process.env.BABEL_ENV = 'production';

  module.exports = {
  entry: './src/index.js',
  output: {
      filename: 'drizzle-react-components.js',
      library: 'drizzle-react-components',
      libraryTarget: 'umd',
      path: path.resolve(__dirname, 'dist')
  },
  module: {
<<<<<<< HEAD
      loaders: [{
          test: /\.(js)$/,
          include: path.resolve(__dirname, 'src'),
          use: [{
              loader: 'babel-loader',
              query: {
                  presets: ['es2015','react']
              }/* ,
              options: {
                  presets: ['react'],
                  plugins: [require('babel-plugin-transform-class-properties'), require('babel-plugin-transform-object-rest-spread')]
              } */
          }]
      }]
=======
    loaders: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }/* ,
        options: {
          presets: ['react'],
          plugins: [require('babel-plugin-transform-class-properties'), require('babel-plugin-transform-object-rest-spread')]
        } */
      }]
    }]
>>>>>>> 5d87d8e... Actually fixed indentation.
  },
  externals: [
      'drizzle',
      'drizzle-react',
      'prop-types',
      'react',
      'redux'
  ]
};
