// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

const mdTemplate = 
// TODO: Create an array of questions for user input
const questions = [
  // inquirer
  //   .prompt([
  //     {
  //       type: "input",
  //       message: "What is the title of the project?",
  //       name: "title",
  //     },
  //     {
  //       type: "input",
  //       message: "Provide a description of the project?",
  //       name: "description",
  //     },
  //     {
  //       type: "input",
  //       message: "Provide a table of contents?", // separate function
  //       name: "table of contents",
  //     },
  //     {
  //       type: "input",
  //       message: "Provide installation instructions",
  //       name: "instructions",
  //     },
  //     {
  //       type: "input",
  //       message: "Describe how to use the application",
  //       name: "usage",
  //     },
  //     {
  //       type: "input",
  //       message: "List project contributors",
  //       name: "contributing",
  //     },
  //     {
  //       type: "input",
  //       message: "Provide the tests used for the project",
  //       name: "tests",
  //     }
  //   ])
  //   .then((response) =>
  //     response.confirm === response.name
  //       ? console.log("Success!")
  //       : console.log("Nice to meet you!")
  //   );
    .then((response) =>
    response.confirm === response.name
      ? console.log("Success!")
      : console.log("Nice to meet you!")
  );
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { //constructor function that presents questions
    this.title = title;
    this.description = description;
    this.tableOfContents = tableOfContents;
    this.installation = installation;
    this.usage = usage;
    this.license = license; //list
    this.contributing = contributing;
    this.tests = tests;


}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
