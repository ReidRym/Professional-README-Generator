// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache 2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// let generateMarkdown = 

function generateMarkdown(data) {
  return `# ${data.title}



## Description
${data.description}


## Table of Contents
${data.tableOfContents}




## Installation
${data.installation}


## Usage
${data.usage}


## license
${data.license}


## Contributing
${data.contributing}


## Tests  
${data.tests}


## Questions
${data.questions}


## Contact
${data.contact}


## GitHub
${data.github}


## Email
${data.email}


## Credits
${data.credits}


## Badges
${data.badges}
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
Get way more badges at [shields.io](https://shields.io)



`;
}

module.exports = generateMarkdown;

