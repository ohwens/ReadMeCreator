// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of your Application?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your Application. ie: Why did you build it? What problem does it solve? Did you learn anything?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'List any installation Instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How should the Application be used?',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who contributed to building your Application?',
      },
      {
        type: 'input',
        name: 'resources',
        message: 'What third party resources did you use?',
      },
      {
          type: 'input',
          name: 'email',
          message: 'What is your email address?'
      },
      {
          type: 'input',
          name: 'github',
          message: 'What is your GitHub username?'
      },
      {
        type: 'rawlist',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU GPLv3' ]
      }    
];

// TODO: Create a function to write README file
function promptUser() {
    return inquirer.prompt(questions)
}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('testREADME.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote testREADME.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
