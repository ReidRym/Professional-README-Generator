// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project?",
  },
  {
    type: "confirm",
    name: "tableOfContents",
    message: "Do you want to create a table of contents for your document?",
    default: true,
  },
  {
    when: function (response) {
      return response.tableOfContents;
    },
    type: "checkbox",
    name: "tableOfContentsItems",
    message: "Which items should be in the Table of Contents?",
    choices: [
      "TITLE",
      "DESCRIPTION",
      "INSTALLATION",
      "USAGE",
      "CREDITS",
      "BADGES",
      "FEATURES",
      "CONTRIBUTING",
      "TESTS",
      "QUESTIONS",
      "CONTACT",
      "GITHUB",
      "EMAIL",
    ].map(item => ({ name: item, value: item.toLowerCase() })),
    default: [
      "title",
      "description",
      "installation",
      "usage",
      "credits",
      "license",
      "badges",
      "features",
      "contributing",
      "tests",
      "questions",
      "contact",
      "github",
      "email",
    ],
  },

  {
    when: function (response) {
      return !response.tableOfContents;
    },
    
    type: "confirm",
    name: "skipTableOfContents",
    message: "Do you want to skip creating a Table of Contents?",
    },

  {
    type: "input",
    name: "installation",
    message: "Please include step by step instructions to install your project?",
  },
  {
    type: "input",
    name: "Usage",
    message: " Please provide detailed instructions on how the user will use your project or application?",
  },
  {
  type: "confirm",
  name: "Usage",
  message: 
  "Do you need help adding a screenshot to your Mark Down Tutorial?",
  default: true,
  
},
{
when: function (response) {
  return !response.Usage;
},
},
{
  type: "input",
  name: "Usage",
  message: "Yes, of course! Here is a helpful link that will provide step-by-step instructions on how to add a screenshot for your Mark Down Tutorial: https://www.wikihow.com/Add-a-Screenshot-to-a-Markdown-File?",
},
  {
    type: "list",
    name: "license",
    message: "what license?",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
    if (data.tableOfContents) {
      let toc = '## Table of Contents\n\n';
      data.tableOfContentsItems.forEach(item => {
        toc += `* [${item.toUpperCase()}](#${item})\n`;
      });
  
      data.tableOfContents = toc;
    }
  
    fs.writeFileSync(fileName, generateMarkdown(data));
  }
  
  // TODO: Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then(data => {
      console.log(data);
      writeToFile("README.md", data);
    });
  }
  
  // Function call to initialize app
  init();