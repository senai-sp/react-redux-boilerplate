const path = require('path');
const webpack = require('webpack');
// Plugin to export index.html using configuration of webpack
// attaching css files and js files
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Separate the CSS loader in files
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// Methods to get the path through the 'root' or 'src'
const inProject = path.resolve.bind(path, __dirname, '../');
const inProjectSrc = file => inProject('src', file);

// Verifying enviroment of process
const NODE_ENV = process.env.NODE_ENV || 'development';
const __DEV__ = NODE_ENV === 'development';
const __TEST__ = NODE_ENV === 'test';
const __PROD__ = NODE_ENV === 'production';

console.log(inProjectSrc('index'));


const config = {
  entry: {
    normalize: [
      // Polyfills of some mehtods to old browser run the applications
      inProjectSrc('normalize'),
    ],
    main: [
      // Entry point of application
      inProjectSrc('index'),
    ],
  },
  devtool: __DEV__ ? 'source-map' : false,
  output: {
    path: inProject('build'),
    filename: __DEV__ ? '[name].js' : '[name].[chunkhash].js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      inProject('src'),
      'node_modules',
    ],
    extensions: ['*', '.js', '.jsx', '.json'],
  },
  module: {
    rules: [],
  },
  plugins: [
    new webpack.DefinePlugin(Object.assign({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
      __DEV__,
      __TEST__,
      __PROD__,
    }, {})),
  ],
};

// JavaScript
// ------------------------------------
config.module.rules.push({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    query: {
      cacheDirectory: true,
      plugins: [
        'babel-plugin-transform-class-properties',
        'babel-plugin-syntax-dynamic-import',
        'babel-plugin-syntax-async-functions',
        [
          'babel-plugin-transform-runtime',
          {
            helpers: true,
            polyfill: false, // we polyfill needed features in src/normalize.js
            regenerator: true,
          },
        ],
        [
          'babel-plugin-transform-object-rest-spread',
          {
            useBuiltIns: true, // we polyfill Object.assign in src/normalize.js
          },
        ],
      ],
      presets: [
        'babel-preset-react',
        ['babel-preset-env', {
          modules: false,
          targets: {
            ie9: true,
          },
          uglify: true,
        }],
      ],
    },
  }],
});

// Styles
// ------------------------------------
const extractStyles = new ExtractTextPlugin({
  filename: 'styles/[name].[contenthash].css',
  allChunks: true,
  disable: __DEV__,
});

config.module.rules.push({
  test: /\.(sass|scss)$/,
  loader: extractStyles.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          sourceMap: __DEV__,
          minimize: {
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions'],
            },
            discardComments: {
              removeAll: true,
            },
            discardUnused: false,
            mergeIdents: false,
            reduceIdents: false,
            safe: true,
            sourcemap: __DEV__,
          },
        },
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: __DEV__,
          includePaths: [
            inProjectSrc('styles'),
          ],
        },
      },
    ],
  }),
});
config.plugins.push(extractStyles);

// Images
// ------------------------------------
config.module.rules.push({
  test: /\.(png|jpg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 8192,
  },
});

// Fonts
// ------------------------------------
[
  ['woff', 'application/font-woff'],
  ['woff2', 'application/font-woff2'],
  ['otf', 'font/opentype'],
  ['ttf', 'application/octet-stream'],
  ['eot', 'application/vnd.ms-fontobject'],
  ['svg', 'image/svg+xml'],
].forEach((font) => {
  const extension = font[0];
  const mimetype = font[1];

  config.module.rules.push({
    test: new RegExp(`\\.${extension}$`),
    loader: 'url-loader',
    options: {
      name: 'fonts/[name].[ext]',
      limit: 10000,
      mimetype,
    },
  });
});

// HTML Template
// ------------------------------------
config.plugins.push(new HtmlWebpackPlugin({
  template: inProjectSrc('index.html'),
  inject: true,
  minify: {
    collapseWhitespace: true,
  },
}));

// Bundle Splitting
// ------------------------------------
if (!__TEST__) {
  const bundles = ['normalize', 'manifest'];
  bundles.unshift('vendor');
  config.entry.vendor = [
    'react',
    'react-dom',
    'redux',
    'react-redux',
    'react-router-dom',
  ];
  config.plugins.push(new webpack.optimize.CommonsChunkPlugin({ names: bundles }));
}

// Production Optimizations
// ------------------------------------
if (__PROD__) {
  config.plugins.push(
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: !!config.devtool,
      comments: false,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
    }),
  );
}

module.exports = config;
