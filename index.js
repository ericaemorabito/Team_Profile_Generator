//Import dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const { generateHTML } = require('./generateHtml'); //? imported incorrectly
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

let team = []; //holds all info for the team

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
      if (choice.employee === 'Manager') {
        let newManager = new Manager;
        newManager.getName();
        //createManager();
      } else if (choice.employee === 'Intern'){
        createIntern();
      } else if (choice.employee === 'Engineer'){
        createEngineer();
      } else (console.log('Finished!'))
    })
}

function createManager() {
  //? Use this type of thing here
  //?then in the getName() use the inquirer.prompt
  //newManager.getName(); --> name prompt
  //newManager.getId(); ---> id prompt
  //newManager.getEmail(); ---> email prompt
  //newManager.getOfficeNumber(); ---> office number prompt
  //newManager.getRole();
  
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
      //console.log(input); //prints : { name: 'Erica', id: '123', email: '123@gmail', office: '3' }
      let newManager = new Manager(
        input.name,
        input.id,
        input.email,
        input.office
      )
      team.push(newManager);
      //console.log(newManager)
      //console.log(team); 
      //Prints -->
      // [
      //   Manager {
      //     name: 'Erica',
      //     id: '123',
      //     email: '123@gmail',
      //     officeNumber: '3'
      //   }
      // ]
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
      }
    ])
    .then(function(input){
      let newIntern = new Intern(
        //team.length,
        input.name
      )
      team.push(newIntern);
      console.log(team)
      startProgram();
    })
}


startProgram();

module.exports = createManager;