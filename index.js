//Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');

//Classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//Generate HTML js page
//const createEmployeeCards = require('./utils/generateHtml');
//const htmlPageContent = require('./utils/generateHtml');

//Filterteam.js page
const createManagersArray = require('./utils/filterteam');
//Team starts as an empty array
let team = []; 

//Begins prompting the user for team information
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
      if (choice.employee === 'Manager') {
        createManager();
      } else if (choice.employee === 'Intern') {
        createIntern();
      } else if (choice.employee === 'Engineer') {
        createEngineer();
      } else if (choice.employee === 'None, I am finished.') {
        //logs the final team array
        console.log(team);
        //Write the file
        // fs.writeFile('index.html', htmlPageContent, (err) => {
        //   err ? console.log(err) : console.log('HTML created');
        // })
        console.log('Finished!')
        return;
      }
    })
}

//Prompts to fill in employee's data
function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name.'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id #.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email.'
      },
      {
        type: 'input',
        name: 'unique',
        message: 'Enter office number.'
      },
    ])
    .then(function (input) {
      let newManager = new Manager(
        input.name,
        input.id,
        input.email,
        input.office
      )
      team.push(newManager);
      //console.log(newManager);
      //console.log(team);
      startProgram()
    })
}

const createEngineer = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name.'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id #.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email.'
      },
      {
        type: 'input',
        name: 'unique',
        message: 'Enter github.'
      },
    ])
    .then(function (input) {
      let newEngineer = new Engineer(
        input.name,
        input.id,
        input.email,
        input.github
      )
      team.push(newEngineer);
      //console.log(newEngineer);
      //console.log(team);
      startProgram()
    })
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter name.'
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id #.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter employee email.'
      },
      {
        type: 'input',
        name: 'unique',
        message: 'Enter intern associated school.'
      }
    ])
    .then(function (input) {
      let newIntern = new Intern(
        input.name,
        input.id,
        input.email,
        input.school
      )
      team.push(newIntern);
      //console.log(newIntern)
      //console.log(team)
      startProgram();
    })
}

startProgram();

//Exporting the final team array to be used in generateHTML.js
module.exports = team;