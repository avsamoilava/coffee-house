import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders (options) {
  const isDev = options.mode === 'development';

  return [
    {
      test: /\.html$/,
      use: 'html-loader'
    },
    {
      test: /\.m?js/,
      type: "javascript/auto",
    },
    {
      test: /\.m?js/,
      resolve: {
        fullySpecified: false,
      },
    },
    {
      test: /\.s[ac]ss$/i,
      use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'assets/[name][ext]',
      },
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ]
}