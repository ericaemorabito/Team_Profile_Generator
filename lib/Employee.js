const { default: inquirer } = require("inquirer");
const inquirer2 = require('inquirer');
const Manager = require("./Manager");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getId(){
    // inquirer
    //   .prompt([
    //     {
    //       type: 'input',
    //       name: 'name',
    //       message: 'Enter name'
    //     }
    //   ])
    //   .then(function(input){
    //     let newEmployee = new Manager(
    //       input.name
    //     )
    //     console.log(newEmployee);
    //   })
        return this.id;
      }

  getEmail(){
        return this.email;
      }

  getRole(){
        return "Employee";
      }
}

module.exports = Employee;