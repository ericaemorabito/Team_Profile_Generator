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
  for (let i=0; i < team.length; i++){

    //set newEmployeeCard to a new template literal
    let newEmployeeCard = 
    `<div class="employee_card">
    <h2 class="name">${team[i].getName()}</h2>
    <p class="job">${team[i].constructor.name}</p>
    <p class="id">${team[i].getId()}</p>
    <p class="email"><a href="${team[i].getEmail()}"></a>${team[i].getEmail()}</p>
    <p class="unique">${team[i].getOfficeNumber()}</p>
    </div>`
      
    //add newEmployeeCard to the string for all employee cards 
    console.log(newEmployeeCard)
    employeeCards.concat(newEmployeeCard)
    console.log(employeeCards);
  }
}

//?Create each type of card...
// const createManagerCard = (managers) => {
//   for (let i = 0; i > managers.length; i++) {

//   const managerCard =
//   `<div class="employee_card">
//   <h2 class="name">${managers[i].getName()}</h2>
//   <p class="job">${managers[i].getRole()}</p>
//   <p class="id">${managers[i].getId()}</p>
//   <p class="email"><a href="${managers[i].getEmail()}"></a>${managers[i].getEmail()}</p>
//   <p class="unique">${managers[i].getOfficeNumber()}</p>
//   </div>`
    
//   console.log(managerCard)
//   }
// }

// const createEngineerCard = (engineers) => {
//   for (let i = 0; i > engineers.length; i++) {
//     const engineerCard =
//       `<div class="employee_card">
//   <h2 class="name">${engineers[i].getName()}</h2>
//   <p class="job">${engineers[i].getRole()}</p>
//   <p class="id">${engineers[i].getId()}</p>
//   <p class="email"><a href="${engineers[i].getEmail()}"></a>${engineers[i].getEmail()}</p>
//   <p class="unique">${engineers[i].getGithub()}</p>
// </div>`
//   }
// }

// const createInternCard = (interns) => {
//   for (let i = 0; i > interns.length; i++) {
//     const internCard =
//       `<div class="employee_card">
//   <h2 class="name">${interns[i].getName()}</h2>
//   <p class="job">${interns[i].getRole()}</p>
//   <p class="id">${interns[i].getId()}</p>
//   <p class="email"><a href="${interns[i].getEmail()}"></a>${interns[i].getEmail()}</p>
//   <p class="unique">${interns[i].getSchool()}</p>
// </div>`
//   }
// }

// //?Filter function to get array of engineers, interns, managers
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


module.exports = {createEmployeeCard, htmlPageContent}


//Call filter functions --> call create card functions --> push to base HTML string --> passed into write file
