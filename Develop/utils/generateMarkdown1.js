const fs = require('fs')

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  if (data.license === 'MIT') {
    return `#${data.title}

    
  
    ## Table of Contents (Optional)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    
    ### Description
    ${data.description}
  
    
    ### Installation
    ${data.installation}
    
    ### Usage
    ${data.usage}
    
    For future use:
    To add a screenshot, create an (assets/images) folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ---md
        ![alt text](assets/images/screenshot.png)
        ---
  
  
    ### Credits
    Creators:
    ${data.contributors}
    
    Resources:
    ${data.resources}
  
    ### Questions
      Please reach out to ${data.email} with any questions you may have.
  
      ${'www.github.com/' + data.github}
    
    ### License
    MIT TEXT GOES HERE
    
    For future use:
    If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    `;

  } else {

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
  GNU Text Goes HERE
  
  For future use:
  If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  `;

  }

}

module.exports = generateMarkdown;