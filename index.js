// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const getUserInput = () => {
  return inquirer.prompt(questions);
};

// TODO: Create a function to initialize app
async function init() {
  const userAnswers = await getUserInput();
  console.log("I got my user answers");
  console.log(userAnswers);
  console.log(JSON.stringify(userAnswers));
  console.log("About to write my file");
  fs.writeFile("./utils/README.md", generateMarkdown(userAnswers), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// Function call to initialize app
init();
