import fs from 'fs';
import path from 'path';
let controllers = {};

fs
  .readdirSync(__dirname)
  .filter(file => file.indexOf(".") !== 0 && file !== 'index.js')
  .forEach(file => {
    let obj = require(`./${file}`);
    Object.keys(obj)
    .forEach(controllerName =>  controllers[controllerName] = obj[controllerName]);
  });

export default controllers;
