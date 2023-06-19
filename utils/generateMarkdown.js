// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function getSubtitle() {
  return "Additional content";
}

function renderDescriptionSection(description) {
  return `## Description \n${description}\n${getSubtitle()}`;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("In my generate markdown, this is my data");
  console.log(data);
  return `# ${data.title};

  
${renderDescriptionSection(data.description)}

# Table of Contents
1. Instructions(#instructions)
2. Usage(#usage)
3. Contributors(#contributors)
4. Tests Used(#tests)
5. Licences(#licences)

## Instructions
${data.instructions}

## Usage
${data.usage}

## Contributors
${data.contributors}

## Tests Used
${data.tests}

## Licenses
${data.license}

## Questions

The repository for this project can be found at ${data.github}
For additional questions I can be reached at ${data.email}.
`;
}

module.exports = generateMarkdown;
