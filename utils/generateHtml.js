//Create each template literal card for every employee per array and return final HTML markup

const createEmployeeCard = (team) => {
  let newManagerCard;
  let newInternCard;
  let newEngineerCard;

  //iterate over team array
  for (let i = 0; i < team.length; i++) {

    if (team[i].getRole() === 'Manager') {
      newManagerCard =
        `<div class="employee_card">
          <h2 class="name">${team[i].getName()}</h2>
          <p class="job">${team[i].constructor.name}</p>
          <p class="id">${team[i].getId()}</p>
          <p class="email"><a href="${team[i].getEmail()}"></a>${team[i].getEmail()}</p>
          <p class="unique">${team[i].getOfficeNumber()}</p>
          </div>`
    } else if (team[i].getRole() === 'Engineer') {
      newEngineerCard =
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">${team[i].getId()}</p>
        <p class="email"><a href="${team[i].getEmail()}">${team[i].getEmail()}</a></p>
        <p class="unique"><a href="${team[i].getGithub()}">${team[i].getGithub()}</a></p>
        </div>`
    } else if (team[i].getRole() === 'Intern') {
      newInternCard = 
        `<div class="employee_card">
        <h2 class="name">${team[i].getName()}</h2>
        <p class="job">${team[i].constructor.name}</p>
        <p class="id">${team[i].getId()}</p>
        <p class="email"><a href="${team[i].getEmail()}">${team[i].getEmail()}</a></p>
        <p class="unique">${team[i].getSchool()}</p>
        </div>`
    } else {
      return;
    }
  }
  
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