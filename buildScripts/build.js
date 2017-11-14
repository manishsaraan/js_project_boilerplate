/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';
process.env.NODE_ENV = 'production';

console.log(chalk.red('Generating minified bundle for production.'));
webpack(webpackConfig).run((err, stats => {
   if(err){
     console.log(chalk.red(error));
   }
   else{
     return 0;
   }
}))
