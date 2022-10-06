const Employee = require('./Employee');

class Intern extends Employee {
  constructor(name, id, email, unique, school){
    super(name, id, email, unique);
    this.school = school;
  }

  getSchool(){
    return this.school;
  }

  getRole(){
    return 'Intern';
  }
}

module.exports = Intern;