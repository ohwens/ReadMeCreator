// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# TITLE
  ${data.title}

  ## Table of Contents (Optional)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  
  ## Description
  ${data.description}

  
  ## Installation
  ${data.installation}
  
  # Usage
  ${data.usage}
  
  For future use:
  To add a screenshot, create an (assets/images) folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
      ---md
      ![alt text](assets/images/screenshot.png)
      ---


  # Credits
  Creators:
  ${data.contributors}
  
  Resources:
  ${data.resources}

  #Questions
    Please reach out to ${data.email} with any questions you may have.

    ${'www.github.com/' + data.github}
  
  # License
  
  For future use:
  If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  `;
}

module.exports = generateMarkdown;
