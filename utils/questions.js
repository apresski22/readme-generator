const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of the project?",
    name: "description",
  },
  {
    type: "input",
    message: "Provide a table of contents",
    name: "TOC",
  },
  {
    type: "input",
    message: "Provide installation instructions",
    name: "instructions",
  },
  {
    type: "input",
    message: "Describe how to use the application",
    name: "usage",
  },
  {
    type: "input",
    message: "List project contributors",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide the tests used for the project",
    name: "tests",
  },
];

module.exports = questions;
