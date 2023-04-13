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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Table of Contents
  - [Installation](#installation)
- [Usage](#usage)
- [Description](#description)
- [License](#license

## Description
${data.description}

## Table of Contents
${data.tableOfContents}
- [Table of Contents](#table-of-contents)

## Installation
${data.installation}
- [Installation Instructions](#installation-instructions)

## Usage
${data.usage}
- [Usage](#usage)

## license
${data.license}
- [License](#license)

## Contributing
${data.contributing}
- [Contributing](#contributing)

## Tests  
${data.tests}
- [Tests](#tests)

## Questions
${data.questions}
- [Questions](#questions)

## Contact
${data.contact}
- [Contact](#contact)

## GitHub
${data.github}
- [GitHub](#github)

## Email
${data.email}
- [Email](#email)

## Credits
${data.credits}
- [Credits](#credits)

## Badges
${data.badges}
- [Badges](#badges)



`;
}

module.exports = generateMarkdown;
