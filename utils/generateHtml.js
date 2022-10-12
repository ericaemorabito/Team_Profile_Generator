//Create each template literal card for every employee per array and return final HTML markup

const createEmployeeCard = (team) => {
  //All data to enter the base html will be pushed to this empty array
  let employeeCards = [];

  //iterate over team array
  for (let i = 0; i < team.length; i++) {
  //creates certain employee card by their roles
    if (team[i].getRole() === 'Manager') {
      employeeCards.push(`<div class="employee_card">
      <h2 class="name">${team[i].getName()}</h2>
      <p class="job">${team[i].constructor.name} <i class="fa-solid fa-briefcase"></i></p>
      <p class="id">ID: ${team[i].getId()}</p>
      <p class="email">Email: <a href="mailto:${team[i].getEmail()}" target="_blank">${team[i].getEmail()}</a></p>
      <p class="unique">Office: ${team[i].getOfficeNumber()}</p>
      </div>`);
    } else if (team[i].getRole() === 'Engineer') {
      employeeCards.push(`<div class="employee_card">
      <h2 class="name">${team[i].getName()}</h2>
      <p class="job">${team[i].constructor.name} <i class="fa-solid fa-computer"></i></p>
      <p class="id">ID: ${team[i].getId()}</p>
      <p class="email">Email: <a href="mailto:${team[i].getEmail()}" target="_blank">${team[i].getEmail()}</a></p>
      <p class="unique">Github: <a href="https://github.com/${team[i].getGithub()}" target="_blank">${team[i].getGithub()}</a></p>
      </div>`)
    } else {
      employeeCards.push(`<div class="employee_card">
      <h2 class="name">${team[i].getName()}</h2>
      <p class="job">${team[i].constructor.name} <i class="fa-solid fa-user-graduate"></i></p>
      <p class="id">ID: ${team[i].getId()}</p>
      <p class="email">Email: <a href="mailto:${team[i].getEmail()}" target="_blank">${team[i].getEmail()}</a></p>
      <p class="unique">School: ${team[i].getSchool()}</p>
      </div>`)
    } 
  }

  //returns final html with all employee cards added
  return  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/fa2acf3ead.js" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,500;1,400;1,500&family=Libre+Baskerville:wght@700&display=swap" rel="stylesheet">
    <title>Meet the Team</title>
  </head>
  <body>
    <header>
      <h1>Meet the Team</h1>
      <p id="header_info">We're happy to have a mix of creative and analytical thinkers. Meet our talented team members.</p>
    </header>
    <hr>

    <!-- Display employee cards area-->
    <section id="employee_area">
    ${employeeCards}
    </section>
  
  </body>
  </html>`

}

module.exports = { createEmployeeCard }