const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Provide a description of the project.",
    name: "description",
  },
  {
    type: "input",
    message: "Provide installation instructions.",
    name: "instructions",
  },
  {
    type: "input",
    message: "Describe how to use the application.",
    name: "usage",
  },
  {
    type: "input",
    message: "List project contributors.",
    name: "contributors",
  },
  {
    type: "input",
    message: "Provide the tests used for the project.",
    name: "tests",
  },
  {
    type: "list",
    message: "Provide the license for the project.",
    name: "license",
  },
  {
    type: "input",
    message: "Provide your GtiHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter email address where you can be contacted.",
    name: "email",
  },
];

module.exports = questions;
