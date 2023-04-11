// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "What does your application do?"
    },
    {
        type: "input",
        name: "installation",
        message: "include install instructions?"
    }, 
    {
        type: "list",
        name: "license",
        message: "what license?",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },   
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
console.log(data);
fs.writeFileSync("README.md", generateMarkdown(data)
    )})
}
// Function call to initialize app
init();
