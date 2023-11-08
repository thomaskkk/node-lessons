/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import { writeFile, createWriteStream } from 'node:fs';

console.log('Hi, welcome to qr code generator');

const questions = [
  {
    type: 'input',
    name: 'url',
    message: "What's the url?",
    default() {
      return 'https://www.google.com/';
    },
  }
];

inquirer.prompt(questions).then((answers) => {
  var qr_svg = qr.image(answers.url, { type: 'png' });
  qr_svg.pipe(createWriteStream('qr_img.png'));

  writeFile('URL.txt', answers.url, (err) => {
    if (err) throw err;
    console.log('The data has been saved!');
  }); 
});