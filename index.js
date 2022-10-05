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
        createManager();
      } else if (choice.employee === 'Intern'){
        createIntern();
      }
    })
}

function createManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter Manager name.'
      }
    ])
    .then(function (input) {
      console.log(input);
      let newManager = new Manager(
        //team.length,
        input.name
      )
      team.push(newManager);
      console.log(team);
      startProgram()
    })
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter intern name.'
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


//! put generate HTML function here

//!