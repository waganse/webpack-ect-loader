# webpack-ect-loader
The [ect](http://ectjs.com/) templates compiler for webpack.
This includes a html formatter [pretty](https://github.com/jonschlinkert/pretty).

## Installation

```
npm i -D webpack-ect-loader
```

## Configuration

This works well with [html-loader](https://github.com/webpack-contrib/html-loader).

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
  }
};
```
