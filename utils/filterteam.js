const team = require('../index');

const createManagersArray = () => {
const managers = team.filter(
  function(team){
    team.forEach((team) => team.getRole() === 'Manager')
  }
);
console.log(managers)
};

//Export create arrays
module.exports = createManagersArray;
