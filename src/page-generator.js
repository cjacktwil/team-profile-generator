const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

const inquirer = require('inquirer');

module.exports = templateData => {
    // destructure page data by section
    const {Manager, Engineer, Intern} = templateData;

return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team Profile</title>
//   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//   <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//   <link rel="stylesheet" href="style.css">
</head>

<body>
  <header>MY TEAM</header
  <main>
    card1
    card2
    card3
  </main
  </body>
  </html>
  `
};

