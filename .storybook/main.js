//module.exports = {
//  stories: ['../stories/**/*.stories.@(js|mdx|jsx)'],
  //addons: ['@storybook/addon-essentials']
//}
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],

  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-actions', 
    '@storybook/addon-essentials', 
    '@storybook/addon-backgrounds'],
  
    webpackFinal: async (config, { configType }) => {
      console.log("CURRENT CONFIG");
      console.log(config.module.rules);
      config.module.rules = config.module.rules.filter(
        f => f.test.toString() !== '/\\.less$/' // check the right `test` string

      );

      config.module.rules.push({
        // this is for both less and scss
        test: /.*\.(?:le|c|sc)ss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader',
          options: {
            modules: false
          }
        }, {
          loader: 'less-loader',
          options: {
            lessOptions: {
              javascriptEnabled: true
            }
          }
        }, {
          loader: 'sass-loader'
        }
      ]
      });
      config.plugins.push(new MiniCssExtractPlugin({
        filename: '[name]-[contenthash].css',
        chunkFilename: '[id]-[contenthash].css',
      }));
      return config;
    },
};