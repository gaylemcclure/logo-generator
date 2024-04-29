//Import dependencies
const inquirer = require('inquirer');

//Logo created - logo.svg
//pring "Generated logo.svg" to the command line
//Open logo.svg in browser

//Questions to ask
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter your logo text (max three characters):',
        validate(value) {
            const pass = value.length;
            if (pass <= 3) {
                return true;
            }
            return 'Please enter a maximum of 3 characters'
        }
    },
    {
        type: 'input', 
        name: 'colour',
        message: 'Enter the colour name or hexidecimal number (including a #) for the text: '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Select the shape for the logo: ',
        choices: [
          "Circle",
          "Triangle",
          "Square"
        ],
      },
]

//Inquirer function to ask the question prompts
inquirer
  .prompt(questions)
  .then((answers) => {
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
