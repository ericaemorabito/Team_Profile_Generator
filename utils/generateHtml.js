//Create each template literal card for every employee per array

//? how to add to base html
//? how to create more than one card as iterates through array
const createManagerCard = (managers) => {
  for (let i = 0; i > managers.length; i++) {

  const managerCard =
  `<div class="employee_card">
  <h2 class="name">${managers[i].getName()}</h2>
  <p class="job">${managers[i].getRole()}</p>
  <p class="id">${managers[i].getId()}</p>
  <p class="email"><a href="${managers[i].getEmail()}"></a>${managers[i].getEmail()}</p>
  <p class="unique">${managers[i].getOfficeNumber()}</p>
  </div>`
console.log(managerCard)
  }
}

const createEngineerCard = (engineers) => {
  for (let i = 0; i > engineers.length; i++) {
    const engineerCard =
      `<div class="employee_card">
  <h2 class="name">${engineers[i].getName()}</h2>
  <p class="job">${engineers[i].getRole()}</p>
  <p class="id">${engineers[i].getId()}</p>
  <p class="email"><a href="${engineers[i].getEmail()}"></a>${engineers[i].getEmail()}</p>
  <p class="unique">${engineers[i].getGithub()}</p>
</div>`
  }
}

const createInternCard = (interns) => {
  for (let i = 0; i > interns.length; i++) {
    const internCard =
      `<div class="employee_card">
  <h2 class="name">${interns[i].getName()}</h2>
  <p class="job">${interns[i].getRole()}</p>
  <p class="id">${interns[i].getId()}</p>
  <p class="email"><a href="${interns[i].getEmail()}"></a>${interns[i].getEmail()}</p>
  <p class="unique">${interns[i].getSchool()}</p>
</div>`
  }
}

//Filter function to get array of engineers, interns, managers
const getEngineers = (employees) => {
  const engineers = employees.filter(employee => {
    if (employee.getRole() === 'Engineer') {
      return true;
    } else {
      return false;
    }
  })
  console.log(engineers);
}

const getInterns = (employees) => {
  const interns = employees.filter(employee => {
    if (employee.getRole() === 'Intern') {
      return true;
    } else {
      return false;
    }
  })
  console.log(interns);
}

const getManagers = (employees) => {
  const managers = employees.filter(employee => {
    if (employee.getRole() === 'Manager') {
      return true;
    } else {
      return false;
    }
  })
  console.log(managers);
  createManagerCard(managers);
}

module.exports = getEngineers;
module.exports = getInterns;
module.exports = getManagers;

//AskBCS notes -----------
// employees => {
//console.log(employees)
//   const engineers = employees.filter(employee => {
//     if (employee instanceof Engineer){
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(engineers);
// }