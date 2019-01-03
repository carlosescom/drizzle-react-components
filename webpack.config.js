const path = require('path');

process.env.BABEL_ENV = 'production';

  module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'drizzle-react-components.js',
    library: 'drizzle-react-components',
    libraryTarget: 'umd',
    path: "c:\\Users\\carlo\\Desktop\\Pedro's List\\node_modules\\drizzle-react-components\\"
  },
  module: {
    loaders: [{
      test: /\.(js)$/,
      include: path.resolve(__dirname, 'src'),
      use: [{
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [require('babel-plugin-transform-class-properties'), require('babel-plugin-transform-object-rest-spread')]
        }/* ,
        options: {
          presets: ['react'],
          plugins: [require('babel-plugin-transform-class-properties'), require('babel-plugin-transform-object-rest-spread')]
        } */
      }]
    }]
  },
  externals: [
      'drizzle',
      'drizzle-react',
      'prop-types',
      'react',
      'redux'
  ]
};
