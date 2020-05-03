const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

const styleLoaders = (options, loader, isProduction) => {
  const loaders = ([
    { loader: isProduction ? MiniCssExtractPlugin.loader : 'style-loader' },
    { loader: 'css-loader', options },
    { loader: 'postcss-loader' },
  ])
  if (loader) {
    loaders.push({ loader })
  }

  return loaders
}

const getPlugin = (isProduction) => {
  const plugins = [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin(),
  ]
  if (isProduction) {
    plugins.push(new MiniCssExtractPlugin(), new OptimizeCSSAssetsPlugin())
  }
  return plugins
}

module.exports = (env) => ({
  mode: env.production ? 'production' : 'development',
  entry: './src/index.js',
  devtool: env.production ? false : 'inline-source-map',
  optimization: env.production ? {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        parallel: true,
        cache: true
      })
    ],
  } : {},
  module: {
    rules: [
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: styleLoaders({ importLoaders: 1 }, null, env.production)
      },
      {
        test: cssModuleRegex,
        use: styleLoaders({ importLoaders: 1, modules: { localIdentName: '[local]--[hash:base64:5]' } }, null, env.production)
      },
      {
        test: sassRegex,
        exclude: sassModuleRegex,
        use: styleLoaders({ importLoaders: 2 }, 'sass-loader', env.production),
      },
      {
        test: sassModuleRegex,
        use: styleLoaders(
          {
            importLoaders: 2,
            modules: { localIdentName: '[local]--[hash:base64:5]' },
          },
          'sass-loader',
          env.production,
        ),
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ],
  },
  resolve: {
    extensions: [ '.js' ],
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: getPlugin(env.production),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
})
