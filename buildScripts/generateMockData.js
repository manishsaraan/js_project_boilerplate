//this file generates mock data

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./api/db.json', json, function(error){
   if(error){
     return console.log(chalk.red(error));
   }
   else{
    console.log(chalk.green('Mock Data Generated..'));
   }
})
