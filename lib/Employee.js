const { default: inquirer } = require("inquirer");

class Employee {
  constructor(name, id, email, unique) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.unique = unique;
  }

  getName() {
   return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }

  getUnique(){
    return this.unique;
  }
}

module.exports = Employee;