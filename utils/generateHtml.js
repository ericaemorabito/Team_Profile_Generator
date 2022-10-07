//Create each template literal card for every employee per array

//! text1.concat(text2)
let employeeCards = '';

let htmlPageContent =
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./style.css">
  <title>Meet the Team</title>
</head>
<body>
  <header>
    <h1>Meet the Team</h1>
    <p id="header_info">We're happy to have a mix of creative and analytical thinkers. Meet our talented team members.</p>
  </header>

  <!-- Display employee cards area-->
  <section id="employee_area">
  ${employeeCards}
    
  </section>

</body>
</html>`

const createEmployeeCard = (team) => {
  //iterate over team array
  for (let i = 0; i < team.length; i++) {

    if (team[i].getRole() === 'Manager') {
      let newManagerCard =
        `<div class="employee_card">
          <h2 class="name">${team[i].getName()}</h2>
          <p class="job">${team[i].constructor.name}</p>
          <p class="id">${team[i].getId()}</p>
          <p class="email"><a href="${team[i].getEmail()}"></a>${team[i].getEmail()}</p>
          <p class="unique">${team[i].getOfficeNumber()}</p>
          </div>`
      console.log(newManagerCard); //working
      employeeCards.concat(newManagerCard); //!issue
    } else if (team[i].getRole() === 'Engineer') {
      let newEngineerCard =
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">${team[i].getId()}</p>
        <p class="email"><a href="${team[i].getEmail()}">${team[i].getEmail()}</a></p>
        <p class="unique"><a href="${team[i].getGithub()}">${team[i].getGithub()}</a></p>
        </div>`
        console.log(newEngineerCard); //working 
        employeeCards.concat(newEngineerCard); //!issue
    } else if (team[i].getRole() === 'Intern') {
      let newInternCard = 
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">${team[i].getId()}</p>
        <p class="email"><a href="${team[i].getEmail()}">${team[i].getEmail()}</a></p>
        <p class="unique">${team[i].getSchool()}</p>
        </div>`
      console.log(newInternCard); //assume working
      employeeCards.concat(newInternCard); //!issue
    } else {
      console.log('These are all the employees:' + employeeCards); //!employeeCards is still 0
      return;
    }
  }
}

// //?Filter function to get array of engineers, interns, managers -----
// const getEngineers = (employees) => {
//   const engineers = employees.filter(employee => {
//     if (employee instanceof Engineer) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(engineers);
// }

// const getInterns = (employees) => {
//   const interns = employees.filter(employee => {
//     if (employee instanceof Intern) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(interns);
// }

// const getManagers = (employees) => {
//   const managers = employees.filter(employee => {
//     if (employee instanceof Manager) {
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(managers);
//   createManagerCard(managers);
// }
// module.exports = getEngineers;
// module.exports = getInterns;
// module.exports = getManagers;

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

module.exports = { createEmployeeCard, htmlPageContent }