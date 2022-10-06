const Employee = require('./Employee');

class Engineer extends Employee {
  constructor(name, id, email, unique){
    super(name, id, email, unique);
    this.unique = unique;
  }

  getGithub(){
    return this.github;
  }

  getRole(){
    return 'Engineer';
  }
}

module.exports = Engineer;