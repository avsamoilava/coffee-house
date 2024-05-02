import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildLoaders (options) {
  const isDev = options.mode === 'development';

  return [
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
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ]
}