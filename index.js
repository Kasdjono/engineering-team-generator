const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

// ------ for generating the html document ------ //
const generateHtml = require("./src/generateHtml.js");

// ------ array for data to be collected in ------ //
const teamData= [];

// ------ input section for manager ------ //
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the manager?",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the id number of the manager:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the email of the manager?",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the office number of the manager?",
        name: "officeNum",
      },
      {
        type: "list",
        message: "Would you like to add another team member, select from the choices or choose 'Exit'.",
        choices: ['Engineer', 'Intern', 'Exit'], 
        name: "role",
      },
    ])
    .then((res) => {
        const managerData = new Manager (res.name, res.id, res.email, res.officeNum)
        teamData.push(managerData);
        
        if (res.role === "Engineer") {
          newEngineer()
        }
        else if (res.role === "Intern") {
          newIntern()
        }
        else {
          fs.writeFile("./src/index.html", generateHtml(teamData), (err) =>
          err ? console.log(err) : console.log("Success!"))
        
        }
    });
}


// ------ input section for enginer ------ //
function newEngineer () {
  inquirer
.prompt([
  {
    type: "input",
    message: " Enter the name of the engineer?",
    name: "name",
  },
  {
    type: "input",
    message: "Enter the id number of the engineer?",
    name: "id",
  },
  {
    type: "input",
    message: "Enter the email of the engineer?",
    name: "email",
  },
  {
    type: "input",
    message: "Enter the github address of the engineer?",
    name: "github",
  },
  {
    type: "list",
    message: "Would you like to add another team member, select from the choices or choose 'Exit'.",
    choices: ["Engeneer", "Intern", "Exit"],
    name: "role",
  },
])
    .then((res) => {
      const engineerData = new Engineer (res.name, res.id, res.email, res.github)
      teamData.push(engineerData);
      
      if (res.role === "Engineer") {
        newEngineer()
      }
      else if (res.role === "Intern") {
        newIntern()
      }
      else {
        fs.writeFile("./src/index.html", generateHtml(teamData), (err) =>
        err ? console.log(err) : console.log("Success!"))
      }
    });
}

// ------input section for intern ------ //
function newIntern () {
  inquirer
    .prompt([
      {
        type: "input",
        message: " Enter the name of the intern?",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the id number of the intern?",
        name: "id",
      },
      {
        type: "input",
        message: "Enter is the email of the intern?",
        name: "email",
      },
      {
        type: "input",
        message: "Enter school is the intern enrolled at?",
        name: "school",
      },
      {
        type: "list",
        message: "Would you like to add another team member, select from the choices or choose 'Exit'.",
        choices: ["Engeneer", "Intern", "Exit"],
        name: "role",
      },
    ])
    .then((res) => {
      const internData = new Intern (res.name, res.id, res.email, res.school)
      teamData.push(internData);
      
      if (res.role === "Engineer") {
        newEngineer()
      }
      else if (res.role === "Intern") {
        newIntern()
      }
      else {
        fs.writeFile("./src/index.html", generateHtml(teamData), (err) =>
        err ? console.log(err) : console.log("Success!"))
      
      }
    });
  }

  console.log(teamData);

init();
module.exports = init;

