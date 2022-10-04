const Employee = require('./Employee');

class Intern extends Employee {
  constructor(school){
    super(name, id, email);
    this.school = school;
  }

  getSchool(){
    //?
  }

  getRole(){
    //Overridden to return 'intern'
  }
}

module.exports = Intern;