const path = require('path');

module.exports = {
  mode: 'production',
  watch: true,
  entry: {
    main: path.join(__dirname, 'src/js', 'main'),
    single: path.join(__dirname, 'src/js', 'single'),
    home: path.join(__dirname, 'src/js', 'home'),
    category: path.join(__dirname, 'src/js', 'category'),
    random: path.join(__dirname, 'src/js', 'random'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'assets/js'),
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx'],
  },
};
