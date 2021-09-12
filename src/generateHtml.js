const { teamData } = require("init");


for (i=0; i<teamData.length; i++) {
  if (this.role === "Manager") {
    managerCard();
  }
  else if (this.role === "Engineer") {
    engineerCard();
  }
  else if (this.role === "Intern") {
    internCard();
  }

}


function managerCard () {
  this.name = Manager.name;
  this.role = Manager.role;
  this.id = Manager.id;
  this.email = Manager.email; 
  this.office = Manager.office;
}

function  engineerCard () {
  this.name = Engineer.name;
  this.role = Engineer.role;
  this.id = Engineer.id;
  this.email = Engineer.email; 
  this.office = Engineer.github;
}

function internCard () {
  this.name = Intern.name;
  this.role = Intern.role;
  this.id = Intern.id;
  this.email = Intern.email; 
  this.office = Intern.school;
}


function generateHtml(data) {

const htmlString = 
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <title>Eng-Team</title>
</head>

<body>

    <header class="mb-5">
        <h1 class="main-header">My Team</h1>
    </header>

    ${managerCard()}
    ${engineerCard()}
    ${internCard()}

    <div class="row align-items-start">
        <section class="row justify-content-around">

            <div class="col-12 col-sm-6 col-lg-4 mt-0 p-0">
                <div class="card mx-auto" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title">${Manager.name}</h5>
                        <h6 class="job-title">${Manager.role}</h6>
                        <div class="card w-98">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID#: ${Manager.id}</li>
                                <li class="list-group-item">Email: <a href="#">${Manager.email}</a>
                                </li>
                                <li class="list-group-item">Manager office: ${Manager.office}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 mt-0 p-0">
                <div class="card mx-auto" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title">${Engineer.name}</h5>
                        <h6 class="job-title">${Engineer.role}</h6>
                        <div class="card w-98">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID#: ${Engineer.id}</li>
                                <li class="list-group-item">Email: <a href="#">${Engineer.email}</a>
                                </li>
                                <li class="list-group-item">GitHub: <a href="#">${Engineer.github}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4 mt-0 p-0">
                <div class="card mx-auto" style="width: 24rem;">
                    <div class="card-body">
                        <h5 class="card-title">${Intern.name}</h5>
                        <h6 class="job-title">${Intern.role}</h6>
                        <div class="card w-98">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID#: ${Intern.id}</li>
                                <li class="list-group-item">Email: <a href="#">${Intern.email}</a>
                                </li>
                                <li class="list-group-item">GitHub: ${Intern.school}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>


</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin="anonymous"></script>

</html>
`

return htmlString;
}

module.exports = generateHtml;