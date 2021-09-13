const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// ------ array for data to be collected in ------ //
const teamArray = [];

// ------ input section for manager ------ //
const newManager = () => {
  return inquirer
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
        name: "officeNumber",
      },
      {
        type: "list",
        message: "Do you want to create another team member, if so what kind?",
        choices: ['Engineer', 'Intern', 'Exit'], 
        name: "newEntry",
      },
    ])
    .then(managerInput => {
      const { name, id, email, officeNumber, newEntry } = managerInput;
      const manager = new Manager(name, id, email, officeNumber, newEntry);

      teamArray.push(manager);
      console.log(manager);

      if (managerInput.newEntry === 'Engineer') {
        newEngineer()
      }
      else if (managerInput.newEntry === 'Intern') {
        newIntern()
      }
      else {
        fs.writeFile('./gen_html/index.html', generateHTML(teamData), (err) =>
        err ? console.log(err) : console.log('Success!'))
      
      }
    });
}

// ------ input section for engineer ------ //
const newEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the engineer?",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the id number of the engineer:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the email of the engineer?",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the office number of the engineer?",
        name: "gitHub",
      },
      {
        type: "list",
        message: "Do you want to create another team member, if so what kind?",
        choices: ['Engineer', 'Intern', 'Exit'], 
        name: "newEntry",
      },
    ])
    .then(engineerInput => {
      const { name, id, email, github } = engineerInput;
      const engineer = new Engineer(name, id, email, github);

      teamArray.push(engineer);
      console.log(engineer);

      if (engineerInput.newEntry === 'Engineer') {
        newEngineer()
      }
      else if (engineerInput.newEntry === 'Intern') {
        newIntern()
      }
      else {
        fs.writeFile('./gen_html/index.html', generateHTML(teamData), (err) =>
        err ? console.log(err) : console.log('Success!'))
      
      }
    });
}

// ------ input section for intern ------ //
const newIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the name of the intern?",
        name: "name",
      },
      {
        type: "input",
        message: "Enter the id number of the intern:",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the email of the intern?",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the school that the intern is enrolled in?",
        name: "school",
      },
      {
        type: "list",
        message: "Do you want to create another team member, if so what kind?",
        choices: ['Engineer', 'Intern', 'Exit'], 
        name: "newEntry",
      },
    ])
    .then(internInput => {
      const { name, id, email, school, newEntry } = internInput;
      const intern = new Intern(name, id, email, school, newEntry);

      teamArray.push(intern);
      console.log(intern);

      if (internInput.role === 'Engineer') {
        newEngineer()
      }
      else if (internInput.role === 'Intern') {
        newIntern()
      }
      else {
        fs.writeFile('./gen_html/index.html', generateHTML(teamData), (err) =>
        err ? console.log(err) : console.log('Success!'))
      
      }
    });
}






