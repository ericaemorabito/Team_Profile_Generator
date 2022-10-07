//Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./utils/generateHtml');

//Classes
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

//generateHtml.js
const htmlPageContent = require('./utils/generateHtml');
const createEmployeeCard = require('./utils/generateHtml');
// const getManagers = require('./utils/generateHtml');
// const getInterns = require('./utils/generateHtml');
// const getEngineers = require('./utils/generateHtml');

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
      //console.log(choice)
      if (choice.employee === 'Manager') {
        createManager();
      } else if (choice.employee === 'Intern') {
        createIntern();
      } else if (choice.employee === 'Engineer') {
        createEngineer();
      } else if (choice.employee === 'None, I am finished.') {
        createEmployeeCard(team)
        //console.log(team);
        // getManagers(team);
        // getInterns(team);
        // getEngineers(team);
        // generateHtml(team);
        //!call generate html function here --> return template literal
        //Write the file
        fs.writeFile('index.html', htmlPageContent, (err) => {
          err ? console.log(err) : console.log('HTML created');
        })
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
        name: 'office',
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
        name: 'github',
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
        name: 'school',
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