const Employee = require('./Employee');
const createManager = require('../index');

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){
    //?
  }

  getRole(){
    return 'Manager'
  }
}

module.exports = Manager;