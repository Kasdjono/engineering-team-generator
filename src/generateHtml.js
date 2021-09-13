const managerCard = (manager) => {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mt-5 p-0">
            <div class="card mx-auto" style="width: 24rem;">
                <div class="card-body">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h6 class="job-title">${manager.getRole()}</h6>
                    <div class="card w-98">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID#: ${manager.getId()}</li>
                            <li class="list-group-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
                            <li class="list-group-item">Manager office: ${manager.getOfficeNumber()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
};

const engineerCard = (engineer) => {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mt-5 p-0">
            <div class="card mx-auto" style="width: 24rem;">
                <div class="card-body">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <h6 class="job-title">${engineer.getRole()}</h6>
                    <div class="card w-98">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID#: ${engineer.getId()}</li>
                            <li class="list-group-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                            <li class="list-group-item">GitHub: ${engineer.getGithub()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
};

const internCard = (intern) => {
    return `
        <div class="col-12 col-sm-6 col-lg-4 mt-5 p-0">
            <div class="card mx-auto" style="width: 24rem;">
                <div class="card-body">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h6 class="job-title">${intern.getRole()}</h6>
                    <div class="card w-98">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID#: ${intern.getId()}</li>
                            <li class="list-group-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a>
                            </li>
                            <li class="list-group-item">School: ${intern.getSchool()}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>`;
};

function makeCards(teamMember) {
    const cardArray = [];

    for (let i = 0; i < teamMember.length; i++) {
        const employeeInfo = teamMember[i];
        const role = employeeInfo.getRole();

        if (role === "Manager") {
            const managerInfo = managerCard(employeeInfo);

            cardArray.push(managerInfo);

        } else {
            if (role === "Engineer") {
                const engineerInfo = engineerCard(employeeInfo);

                cardArray.push(engineerInfo);

            } else {
                if (role === "Intern") {
                    const internInfo = internCard(employeeInfo);

                    cardArray.push(internInfo);
                }
            }
        }
    }

    const teamCards = cardArray.join("");
    return teamCards;
};



function generateHTML(teamCards) {
    return `
<!DOCTYPE html>
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

    <header class="mb-2">
        <h1 class="main-header">My Team</h1>
    </header>

    <div class="row align-items-start">
        <section class="row justify-content-around">

        ${makeCards(teamCards)}

        </section>
    </div>


</body>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin="anonymous"></script>

</html>
`

}

module.exports = generateHTML;