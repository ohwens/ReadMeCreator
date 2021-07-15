const inquirer = require('inquirer')
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
const generateMarkdown = require('./utils/generateMarkdown2')

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
        choices: ['MIT', 'GNU GPLv3'] 
      }    
];

function promptUser() {
    return inquirer.prompt(questions)
}

const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
      .then(() => console.log('Successfully wrote README.md'))
      .catch((err) => console.error(err));
  };


init();