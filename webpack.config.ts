import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';

export default {
  entry: {
    app: path.resolve(__dirname, './app-core/index.tsx'),
  },
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name]-[hash].js',
  },
  module: {
    rules: [
      {
        test: /(\.ts|\.tsx)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                'module': 'es6',
                'target': 'es5',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Rendertron Demo',
      template: './app-core/index.html',
    }),
  ],
};