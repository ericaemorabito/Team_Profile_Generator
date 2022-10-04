//Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML} = require('./src/generateHtml'); //? imported incorrectly

//Starts Program
const startProgram = () => {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you from?',
    }
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  })
}
startProgram();

//export the functioN?
module.exports = startProgram;