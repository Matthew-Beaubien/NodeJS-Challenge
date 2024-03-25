// TODO: Include packages needed for this application
var inquirer = require('inquirer');
var fs = require('fs');
var generateMarkdown = require('./utils/generateMarkdown');
const { title } = require('process');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your projects used for?',
    },
    {
        type: 'input',
        name: 'author',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidlines?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the testing instructions?',
    },
];

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
    );
}

//function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        const readmeContent = generateMarkdown(answers);
        writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
        console.error('Error occured while prompting questions:', error);
    });
}

// Function call to initialize app
init();
