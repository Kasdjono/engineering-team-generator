const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// ------ array for data to be collected in ------ //
const teamArray = [];

// ------ input section for manager ------ //
const addManager = () => {
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
    ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      teamArray.push(manager);
      console.log(manager);
    });
}


// ------ input section for enginer ------ //
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "Choose the type of employee to be added under this manager.",
        choices: ["Engeneer", "Intern"],
        name: "role",
      },
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
        when: (input) => input.role === "Engineer",
        type: "input",
        message: "Enter the email of the engineer?",
        name: "email",
      },
      {
        when: (input) => input.role === "Intern",
        type: "input",
        message: "Enter the github address of the engineer?",
        name: "github",
      },
    ])
    .then(employeeData => {
      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
      let employee;
      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      teamArray.push(employee);

      if (confirmAddEmployee) {
        return addEmployee(teamArray);
      } else {
        return teamArray;
      }
    })
};

const writefile = data => {
  fs.writeFile('./gen_html/index.html', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log('Success!')
      }
  })
};

addManager()
.then(addEmployee)
.then(teamArray => {
  return generateHTML(teamArray)
})
.then(pageHTML => {
  return writefile (pageHTML);
})
.catch(err => {
  console.log(err);
});



