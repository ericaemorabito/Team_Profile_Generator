//Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const {generateHTML} = require('./generateHtml'); //? imported incorrectly

//Starts asking to create employees
const startProgram = () => {
inquirer
  .prompt([
    {
      type: 'list',
      name: 'employee',
      message: 'Which employee do you want to create?',
      choices: ['Manager', 'Engineer', 'Intern', 'None, I am finished.']
    }
  ])
  .then((choice) => {
    console.log(choice)
    //const htmlPageContent = generateHTML(answers);

    // fs.writeFile('index.html', htmlPageContent, (err) =>
    //   err ? console.log(err) : console.log('Successfully created index.html!')
    // );
  })
}
startProgram();

// If startProgram choice is Manager --> run new Manager ???
// If choice is Intern --> run 