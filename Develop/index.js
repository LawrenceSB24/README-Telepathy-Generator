// Packages necessary to launch application

// Package for inquring user about README criteria
const inquire = require("inquirer");
// Package for writing to a file as README.md
const fs = require("fs");

// Questions array for user input
inquire
    .prompt([
        {
            // Prompt for project title
            type: "input",
            message: "What is the name of your project(?): ",
            name: "title"
        },
        {
            // Prompt for description about the project
            type: "input",
            message: "What is your project about(?): ",
            name: "description"
        },
        {
            // Prompt for how the user can install the project 
            type: "input",
            message: "How can I install this project (?): ",
            name: "installation"
        },
        {
            // Prompt for how the user can use the application
            type: "input",
            message: "How do I use this application(?): ",
            name: "usage"
        },
        {
            // Prompt for any contirbutions users can add to the application
            type: "input",
            message: "How can I contribute to the further development of this application(?): ",
            name: "contribute"
        },
        {
            // Prompt for how the user can test the product
            type: "input",
            message: "How can I test this product(?): ",
            name: "test"
        },
        {
            // List of the different licenses users can add to their project
            type: 'list',
            message: 'Choose your liscense for your project: ',
            name: 'license',
            choices: [
                'None',
                'Apache license 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'BSD 2-Clause "Simplified" License',
                'BSD 3-Clause "New" or "Revised" License',
                'Boost Software License 1.0',
                'Creative Commons Zero v1.0 Universal',
                'Eclipse Public License',
                'GNU Affero General Public License v3.0',
                'GNU General Public License v2.0',
                'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0',
                'The Unlicensed'
            ]
        }
    ])
// Conditions for README file to be written
.then((answers) => {
    const content = generateREADME(answers);
    fs.writeFile('README.md', content, (err) =>
        err ? console.err(err) : console.log("README created!")
    );
});

// function to generate README file based on input given by the user
const generateREADME = ({title, description, installation, usage, contribute, test, license}) =>
`
# ${title}

![License: ${license}](https://img.shields.io/badge/License-${license}.svg)

## Description

${description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Future-Contributions](#Future-Contributions)
- [Contact](#Contact)
- [Testing](#Test)
- [License](#Licence)

## Installation
${installation}

## Usage
${usage}

## Future-Contributions
${contribute}

## Testing
${test}

## Contact
For futher information/support for the application, contact info is posted below
### Email: lawrsblundo22@outlook.com
### GitHub: ![GitHub Homepage](https://github.com/LawrenceSB24)

## License
This application and its contents are licensed under the ${license}
`