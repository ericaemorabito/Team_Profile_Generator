//Create each template literal card for every employee per array and return final HTML markup

const createEmployeeCard = (team) => {
  let newManagerCard;
  let newInternCard;
  let newEngineerCard;

  //iterate over team array
  for (let i = 0; i < team.length; i++) {
  //creates certain employee card by their roles
    if (team[i].getRole() === 'Manager') {
      newManagerCard =
        `<div class="employee_card">
          <h2 class="name">${team[i].getName()}</h2>
          <p class="job">${team[i].constructor.name}</p>
          <p class="id">ID: ${team[i].getId()}</p>
          <p class="email">Email: <a href="${team[i].getEmail()}" target="_blank">${team[i].getEmail()}</a></p>
          <p class="unique">Office: ${team[i].getOfficeNumber()}</p>
          </div>`
    } else if (team[i].getRole() === 'Engineer') {
      newEngineerCard =
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">ID: ${team[i].getId()}</p>
        <p class="email">Email: <a href="${team[i].getEmail()}" target="_blank">${team[i].getEmail()}</a></p>
        <p class="unique">Github: <a href="https://github.com/${team[i].getGithub()}" target="_blank">${team[i].getGithub()}</a></p>
        </div>`
    } else if (team[i].getRole() === 'Intern') {
      newInternCard = 
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">ID: ${team[i].getId()}</p>
        <p class="email">Email: <a href="${team[i].getEmail()}" target="_blank>${team[i].getEmail()}</a></p>
        <p class="unique">School: ${team[i].getSchool()}</p>
        </div>`
    } else {
      return;
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
    <title>Meet the Team</title>
  </head>
  <body>
    <header>
      <h1>Meet the Team</h1>
      <p id="header_info">We're happy to have a mix of creative and analytical thinkers. Meet our talented team members.</p>
    </header>
  
    <!-- Display employee cards area-->
    <section id="employee_area">
    ${newManagerCard}
    ${newEngineerCard}
    ${newInternCard}
    </section>
  
  </body>
  </html>`

}

module.exports = { createEmployeeCard }