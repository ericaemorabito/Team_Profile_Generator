const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, unique, officeNumber){
    super(name, id, email, unique);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){
    return this.officeNumber;
  }

  getRole(){
    return 'Manager';
  }
}

module.exports = Manager;