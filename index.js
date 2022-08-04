// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util')
const generateMarkdown = require('./utils/generateMarkdown');
const licenseBadge = require('./utils/licenseBadge').licenseBadge
const writeFileAsync = (fs.writeFileSync);

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your github username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Write a brief description of your project.',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Tell us about your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation steps?',
    name: 'install',
  },
  {
    type: 'input',
    message: 'How do you use this project?',
    name: 'usage',
  },
  {
    type: 'list',
    message: 'What license should your project have?',
    name: 'license',
    choices: ['MIT', 'GNU', 'Apache'],
    default: 'MIT',
  },
  {
    type: 'input',
    message: 'How do you test this project?',
    name: 'test',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    answers.licenseBadge = licenseBadge(answers.license);
    let readMeData = generateMarkdown(answers);
    await writeFileAsync("created-README.md", readMeData);
  } catch (err) {
    throw err;
  }
}

// Function call to initialize app
init();
