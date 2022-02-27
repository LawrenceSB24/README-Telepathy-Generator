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
                "None",
                "Apache-license-2.0",
                "GNU-General-Public-License-v3.0",
                "MIT-License",
                "BSD-2--Clause-'Simplified'-License",
                "BSD-3--Clause-'New'-or-'Revised'-License",
                "Boost-Software-License-1.0",
                "Creative-Commons-Zero-v1.0-Universal",
                "Eclipse-Public-License",
                "GNU-Affero-General-Public-License-v3.0",
                "GNU-General-Public-License-v2.0",
                "GNU-Lesser-General Public-License-v2.1",
                "Mozilla-Public-License-2.0",
                "The-Unlicensed"
            ]
        },
        // Contact information for Questions section
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your GitHub username(?): ',
            name: 'github'
        },
        {
            type: 'input',
            message: 'What is the name of your repo(?): ',
            name: 'repo'
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
const generateREADME = ({title, description, installation, usage, contribute, test, license, email, github, repo}) =>
`# ${title}

![License](https://img.shields.io/badge/License-${license}.svg)
![GitHub](https://img.shields.io/github/license/${github}/${repo})

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

## Questions
If you have any questions about the application, please contact me at:
### Email: ${email}
### GitHub: https://github.com/${github}

## License
This application and its contents are licensed under the ${license}`

// List of badges for present license
// Apache: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// GNU GPL v3: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// BSD 2: [![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
// BSD 3: [![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// Boost: [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// Creative: [![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
// Eclipse: [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// GNU Affero: [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
// GNU GPL v2: [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// GNU LGPL: [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
// Mozilla: [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// Unlicensed: [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
 

