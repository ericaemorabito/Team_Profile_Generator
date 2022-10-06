//Importing team array from index.js
const team = require('./index');

console.log(team);
//Team array after finishing inputs will be something like this: 
// let team = [
//   Manager {
//     name: 'Pete',
//     id: '123',
//     email: '123@gmail',
//     officeNumber: '1'
//   },
//   Engineer {
//     name: 'Sara',
//     id: '456',
//     email: '456@gmail',
//     github: 'saragit'
//   },
//   Intern {
// 		name: 'Roy',
// 		id: '789',
// 		email: '789@gmail',
// 		school: 'UT' }
// ];

//!Everything in progress
//If there's as iterating through names in indexes there is manager etc. create that card
const createEmployeeCards = (team) => {
for (let i=0; i > team.length; i++){
  if ('Manager' === team[i]){
    createManagerCard();
  } else if ('Engineer' === team[i]){
    createEngineerCard();
  } else if ('Intern' === team[i]){
    createInternCard();
  }
}
}

const createManagerCard = (team) => {
  console.log('create manager')
}

const createEngineerCard = () => {
  console.log('create engineer')
}

const createInternCard = () => {
  console.log('create intern')
}

const htmlPageContent = function(team){
  `
  <!DOCTYPE html>
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

    <!-- Each employee card with information-->
    <div class="employee_card">
      <h2 class="name">Jane Doe</h2>
      <p class="job">Engineer</p>
      <p class="id">12345</p>
      <p class="office">#12</p>
      <p class="email"><a href="#">janedoe@gmail.com</a></p>
      <p class="github"><a href="#">https://github.com/janedoe</a></p>
    </div>
    
    <!-- Each employee card with information-->
    <div class="employee_card">
      <h2 class="name">Jane Doe</h2>
      <p class="job">Engineer</p>
      <p class="id">12345</p>
      <p class="office">#12</p>
      <p class="email"><a href="#">janedoe@gmail.com</a></p>
      <p class="github"><a href="#">https://github.com/janedoe</a></p>
    </div>
  </section>

</body>
</html>
  `
}

const generateHTML = function(){
  FileSystem.writeFile('index.html', htmlPageContent, (err)=>
  err ? console.log(err) : console.log('HTML page created.'))
  `html page`
};

//export this module
module.exports= generateHTML;