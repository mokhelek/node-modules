import chalk from 'chalk';
import figlet from 'figlet';
//import the greet module that is in the current folder
import greet from './greet.js'

const styledMessage = chalk.bgBlue.black(greet('Katleho'));
console.log(styledMessage)


figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });