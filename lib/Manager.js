const Employee = require('./Employee');

class Manager extends Employee {
  constructor(officeNumber){
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber(){
    //?
  }

  getRole(){
    //overridden to return 'Manager'
  }
}

const getManager = () => {
  Manager.getName();
  Manager.getId();
  Manager.getEmail();
  Manager.getOfficeNumber();
  Manager.getRole();
}

module.exports = Manager;