const { default: inquirer } = require("inquirer");
const inquirer2 = require('inquirer');
const Manager = require("./Manager");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'Enter name'
        }
      ])
      .then(function (input) {
        this.name = input.name;
        this.getEmail();
      })
  }

  getId() {
    // inquirer
    //   .prompt([
    //     {
    //       type: 'input',
    //       name: 'id',
    //       message: 'Enter employee id #.'
    //     }
    //   ])
    //   .then(function (input) {
    //     newEmployee = new Employee; (
    //       input.name
    //     )
    //     this.getEmail();
    //   })
  }

  getEmail() {
    // inquirer
    //   .prompt([
    //     {
    //       type: 'input'
    //     }
    //   ])
    // return this.email;
  }

  getRole() {
    return "Employee";
  }
}

module.exports = Employee;