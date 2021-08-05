// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs');
const markDown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions =  [
    {
        type: 'input', 
        name: 'title',
        message: 'What is the name of your Application?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Provide a short description of your Application.'
    },
    {
        type: 'input', 
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running.'   
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input', 
        name: 'credits',
        message: 'List your collaborators, if any.'            
    },
    {
        type: 'checkbox', 
        name: 'license',
        choices: ["MIT", "GPLv3", "IBM", "Apache"],
        message: 'Pick your License, select with spacebar, navigate with arrow keys.'            
    },
    {
        type: 'input', 
        name: 'features',
        message: 'What features, packages, technology did you use?'            
    },
    {
        type: 'input', 
        name: 'contribute',
        message: 'How can others contribute to this Project?'            
    },
    {
        type: 'input', 
        name: 'question1',
        message: 'Enter your Github ID'            
    },
    {
        type: 'input', 
        name: 'question2',
        message: 'Enter your full website address including http(s)://'            
    },
    {
        type: 'input', 
        name: 'question3',
        message: 'Enter your email address'            
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('./' + fileName, data, err => {
        if(err) {
            return console.error(err) 
        } else {
            console.log("Writing to " + fileName + " SUCCESSFUL");
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