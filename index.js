// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =  [
    {
        type: 'input', 
        name: 'title',
        message: 'Title of your page'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a short description explaining the what, why, and how of your project.'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'   
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input', 
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHubProvide instructions and examples for use.'            
    },
    {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "IBM", "Apache"],
        message: 'Pick your License.'            
    },
    {
        type: 'input', 
        name: 'features',
        message: 'If your project has a lot of features, list them here.'            
    },
    {
        type: 'input', 
        name: 'contribute',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.'            
    },
    {
        type: 'input', 
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'            
    },
    {
        type: 'input', 
        name: 'questions',
        message: 'Enter your Github ID'            
    },
    {
        type: 'input', 
        name: 'questions2',
        message: 'Enter your full website address including http(s)://'            
    },
    {
        type: 'input', 
        name: 'questions3',
        message: 'Enter your email address'            
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./' + fileName, data, err => {
        if(err) {
            return console.error(err) 
        } else {
            console.log("Successful writing to " + fileName);
        }

    })    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(info) {
            writeToFile("README.md", markDown(info) )
        })
    };

// Function call to initialize app
init();