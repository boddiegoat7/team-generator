const inquirer = require("inquirer");
const fs = require("fs");
const generateTeam = require("./src/generateHtml.js");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const newData = [];

const questions = async () => {
  const input = await inquirer.prompt([
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

  if (input.role === "Manager") {
    const officeNumber = await inquirer.prompt([
      {
        type: "input",
        name: "officeNumber",
        message: "What is your office number?",
      },
    ]);

    const newManager = new Manager(
      input.name,
      input.id,
      input.email,
      officeNumber.officeNumber
    );

    newData.push(
      new Manager(input.name, input.id, input.email, officeNumber.officeNumber)
    );
  } else if (input.role === "Engineer") {
    const github = await inquirer.prompt({
      type: "input",
      name: "github",
      message: "What is your github?",
    });

    const newEngineer = new Engineer(
      input.name,
      input.id,
      input.email,
      github.github
    );

    newData.push(
      new Engineer(input.name, input.id, input.email, github.github)
    );
  } else if (input.role === "Intern") {
    const school = await inquirer.prompt({
      type: "input",
      name: "school",
      message: "What is your school?",
    });

    const newIntern = new Intern(
      input.name,
      input.id,
      input.email,
      school.school
    );

    newData.push(new Intern(input.name, input.id, input.email, school.school));
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
  } else {
    return createTeam();
  }
}

promptQuestions();

function createTeam() {
  console.log("new guy", newData);

  fs.writeFile("./dist/generated.html", generateTeam(newData), (err) => {
    if (err) {
      console.log(err);
    }
  });
}
