//Importing team array from index.js
//const team = require('../index');

const Engineer = require("../lib/Engineer")

//!in progress
// const createEmployeeCards = (team) => {
// for (let i=0; i > team.length; i++){
//   if (team[i].getRole() === 'Manager'){}
//     createManagerCard()
//   } else if (team[i].getRole() === 'Engineer'){
//     createEngineerCard();
//   } else if (team[i].getRole() === 'Intern'){
//     createInternCard();
//   }
// }

// const createManagerCard = (team) => {
//   console.log('create manager')
// }

// const createEngineerCard = () => {
//   console.log('create engineer')
// }

// const createInternCard = () => {
//   console.log('create intern')
// }


// Template literal base for HTML
// `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <link rel="stylesheet" href="./style.css">
//   <title>Meet the Team</title>
// </head>
// <body>
//   <header>
//     <h1>Meet the Team</h1>
//     <p id="header_info">We're happy to have a mix of creative and analytical thinkers. Meet our talented team members.</p>
//   </header>

//   <!-- Display employee cards area-->
//   <section id="employee_area">

//     <!-- Manager -->
//     <div class="employee_card">
//       <h2 class="name">${employee1.getName()}</h2>
//       <p class="job">${employee1.constructor.name}</p>
//       <p class="id">${employee1.getId()}</p>
//       <p class="email">${employee1.getEmail()}<a href="#"></a></p>
//       <p class="github-office-school">${employee1.getUnique()}<a href="#"></a></p>
//     </div>
    
//     <!-- Engineer -->
//     <div class="employee_card">
//       <h2 class="name"></h2>
//       <p class="job"></p>
//       <p class="id"></p>
//       <p class="email"><a href="#"></a></p>
//       <p class="github-office-school"><a href="#"></a></p>
//     </div>

//       <!-- Intern -->
//       <div class="employee_card">
//         <h2 class="name"></h2>
//         <p class="job"></p>
//         <p class="id"></p>
//         <p class="email"><a href="#"></a></p>
//         <p class="github-office-school"><a href="#"></a></p>
//       </div>
//   </section>

// </body>
// </html>
//   `


//! add function get engineers 
//! loop over engineer array and create html literal for each

const getEngineers = (employees) => {
  const engineers = employees.filter(employee => {
    if (employee.getRole() === 'Engineer'){
      return true;
    } else {
      return false;
    }
  })
  console.log(engineers);
}

module.exports = getEngineers;

// employees => {
//   //console.log(employees)
//   const engineers = employees.filter(employee => {
//     if (employee instanceof Engineer){
//       return true;
//     } else {
//       return false;
//     }
//   })
//   console.log(engineers);
// }