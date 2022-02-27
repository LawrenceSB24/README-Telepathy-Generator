# README Telepathy Generator

Greetings! Welcome to the README telepathy generator!


Ok its not actually telepathic but it is interactive.
=======================================================================

## Description

So here is the story:

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

And here is our criteria that we need to satisfy for this project

```
GIVEN a command-line application that accepts user input

WHEN I am prompted for information about my application repository

THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

WHEN I enter my project title

THEN this is displayed as the title of the README

WHEN I enter a description, installation instructions, usage information, contributution guidelines, and test instructions

THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contirbuting, and Tests

WHEN I choose a license for my application with a list of options

THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

WHEN I enter my GitHub username

THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

WHEN I enter my email address

THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

WHEN I click on the links in the Table of Contents

THEN I am taken to the corresponding section of the README
```

Now the criteria section is formatted to make it easier to read. With that our of the way, time to head into the actual functionality.

=========================================================================

Video demonstration of README generator: [Professional README Generator Demonstration](https://drive.google.com/file/d/1ApsaaRH46Qep1S54vziWI47fvflXfcOF/view)

=========================================================================

## Installation

So, how employers can use this application to generate their own custom READMEs is simple.

First, you need to make sure that you have a command-line interface to run the application. This can be Git Bash or Powershell.

Second, you need to install the Inquirer package to have the application generate the prompts for the user to answer. All one needs to do is type `npm i inquirer` into the command line and the Inquirer package will be installed.

Finally, you need to create a `package.json` file that will list in the necessary dependencies. You can create one from scratch by typing in `npm init` into the command line and it will generate a json package for your dependencies.

=========================================================================

## Usage

To run the README generator in the command-line, all one needs to do is run the command `node index.js`.

After you run the application, then you are presented with prompts that inquire about what your project will be. 

Once you answer all of the prompts, then all of the information is incorporated into the README in different sections (all of which are accessible in a table of contents). 

Once the information from the user is entered, then an option for choosing the license for the project to be covered under. The list of licenses is provided by GitHub when users created a repo for their project. 

After choosing the license, then the badge that corresponds with the specific license that you choose.

Once everything has been entered in, then the generator will create a professional README file with the message "README generated" produced in the command line.

==================================================================

## Questions
If you have any questions regarding this application or how you can further contribute to the improvement of the application, then you can contact me at:

#### Email: lawrs22@gmail.com
#### [GitHub](https://github.com/LawrenceSB24)

======================================================================

## License
This application is issued under the GNU General Public License