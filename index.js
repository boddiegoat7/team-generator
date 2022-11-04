const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHtml.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const newStaffData = [];


const questions = async () => {

    const answer = await inquirer.prompt([

    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
    
    {
        type: "input",
        name: "id",
        message: "What is your id?",
    },
    
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    
    {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Manager", "Engineer", "Intern"],
    },
    
]);


    if (answer.role === "Manager") {
        
        const officeNumber = await inquirer.prompt([

            {
                type: "input",
                name: "officeNumber",
                message: "What is your office number?",
            },
        ]);
    
        const newManager = new Manager(
            answer.name,
            answer.id,
            answer.email,
            officeNumber.officeNumber
        );
    
    
        newStaffData.push(
            new Manager(
            answer.name,
            answer.id,
            answer.email,
            officeNumber.officeNumber
            )
        );
        
    }
    
    else if (answer.role === "Engineer") {
    
        const github = await inquirer.prompt({
            type: "input",
            name: "github",
            message: "What is your github?",
        });

        const newEngineer = new Engineer(
            answer.name,
            answer.id,
            answer.email,
            github.github
        );

        newStaffData.push(
            new Engineer(
                answer.name,
                answer.id,
                answer.email,
                github.github)
        );

    }
    
    else if (answer.role === "Intern") {
        
        const school = await inquirer.prompt({
            type: "input",
            name: "school",
            message: "What is your school?",
        });

        const newIntern = new Intern(
            answer.name,
            answer.id,
            answer.email,
            school.school
        );
    
        newStaffData.push(
            new Intern(answer.name, answer.id, answer.email, school.school)
        );
    }
}; 

async function promptQuestions() {

    await questions();

        const addMemberAns = await inquirer.prompt([
    
            {
                name: "addMember",
                type: "list",
                choices: ["Add another member", "Generate Team"],
                message: "What would you like to do next?",
            },
        ]);

        if (addMemberAns.addMember === "Add another member") {
            
            return promptQuestions();

        }
        
        else {
            
            return createTeam();
        }

}

promptQuestions();

    function createTeam() {
        
        console.log("new guy", newStaffData);
            
        fs.writeFile("./dist/team.html", generateTeam(newStaffData), (err) => {
    
        if (err) {
            console.log(err);
        }

        });

    }







