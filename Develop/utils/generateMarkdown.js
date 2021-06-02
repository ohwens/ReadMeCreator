function generateMarkdown(data) {

  if (data.license === 'MIT') {
    return `#${data.title}

    ----
  
    ## Table of Contents
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

    return `#${data.title}

    ----
  
    ## Table of Contents
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
      
    ### Credits
    Creators:
    ${data.contributors}
    
    Resources:
    ${data.resources}
  
    ### Questions
      Please reach out to ${data.email} with any questions you may have.
  
      ${'www.github.com/' + data.github}
    
    ### License
    GNU TEXT GOES HERE
    
    For future use:
    If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
    
    `;

  }

}

module.exports = generateMarkdown;