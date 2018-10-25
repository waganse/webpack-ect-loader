# webpack-ect-loader 
[![Build Status](https://travis-ci.com/waganse/webpack-ect-loader.svg?branch=master)](https://travis-ci.com/waganse/webpack-ect-loader) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

The [ect](http://ectjs.com/) templates compiler for webpack.
This includes a html formatter [pretty](https://github.com/jonschlinkert/pretty).

## Installation

```
npm i -D webpack-ect-loader
```

## Configuration

This works with the following helper packages

- [html-loader](https://github.com/webpack-contrib/html-loader)
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)


``` javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.ect$/,
        use: [
          {
            loader: 'html-loader',
            options: {
            }
          },
          {
            loader: 'ect-loader',
            options: {
              root: path.resolve(__dirname, 'src/ect'),
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.ect',
      filename: 'index.[contenthash].html'
    })
  ]
};
```
