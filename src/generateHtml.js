const Employee = require("../lib/Employee");


const generateTeam = (Position) => {

    const generateManager = (manager) => {

        return `
            
            <div class="card employee-card">

                <div class="card-header">

                    <h2 class="card-title">${manager.getName()}</h2>

                        <h3 class="card-title">${manager.getRole()}</h3>

                </div>

                <div class="card-body">

                    <ul class="list-group">

                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: ${manager.getEmail()}</li>
                        <li class="list-group-item">School: ${manager.getOfficeNumber()}</li>
                    
                    </ul>

                </div>

            </div>
    


        `;
    };

    const generateEngineer = (engineer) => {
    
        return `
            
            <div class="card employee-card">
                
                <div class="header">

                    <h2 class="card-title">${engineer.getName()}</h2>

                        <h3 class="card-title">${engineer.getRole()}</h3>

                </div>

                <div class="card-body">

                    <ul class="list-group">

                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: ${engineer.getEmail()}</li>
                        <li class="list-group-item">Github: ${engineer.getGithub()}</li>
                    
                    </ul>

                </div>
    
            </div>


        `;
    
    };

    const generateIntern = (intern) => {
    
        return `
            
            <div class="card employee-card">

                <div class="card-header">

                    <h2 class="card-title">${intern.getName()}</h2>

                        <h3 class="card-title">${intern.getRole()}</h3>

                </div>

                <div class="card-body">

                    <ul class="list-group">

                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: ${intern.getEmail()}</li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    
                    </ul>

                </div>

            </div>
    
    
        `;
    };


    const html = [];

        html.push(
            
            Position.filter((manager) => manager.getRole() === "Manager").map(
            (manager) => generateManager(manager)
            )
        );

        html.push(
    
            Position.filter((engineer) => engineer.getRole() === "Engineer").map(
            (engineer) => generateEngineer(engineer)
            )
        );

        html.push(
    
            Position.filter((intern) => intern.getRole() === "Intern").map((intern) =>
            generateIntern(intern)
            )
        );

    
    return html.join("");
    
};

module.exports = (Position) => {

    return `
    
        <!DOCTYPE html>
            <html lang="en">
                
                <head>

                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                    <link rel="stylesheet" href="style.css">
                    <title>Team Profile Generator</title>

                </head>

                <body>

                    <div class="container-fluid">

                        <div class="row">

                            <div class="col-12 jumbotron justify-content-center heading">

                                <h1 class="text-center">Team Profile Generator</h1>

                            </div>
                        </div>
                        
                    </div>

                    <div class="container">
                    
                        <div class="row">

                            <div class="col-12 employee justify-content-center">

                                ${generateTeam(Position)}

                            </div>

                    </div>


                </div>
            
            
            </body>

        </html>



    `;
};
