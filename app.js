const inquirer = require('inquirer');
console.log(inquirer);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username' ,
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:',
      validate: aboutInput => {
        if (aboutInput) {
          return true;
        } else {
          console.log('Please enter some info about yourself.')
          return false;
        }
      }
    }
  ])
}
  promptUser().then(answers => console.log(answers))
  .then(projectData => {
    portfolioData.projects.push(projectData);
    if (projectData.confirmAddProject) {
      return promptProject(portfolioData);
    } else {
      return portfolioData;
    }
  });



  const promptProject = portfolioData => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
  if (!portfolioData.projects) {
  portfolioData.projects = [];
  }
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your project?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)'
      },
      {
        type: 'checkbox',
        name: 'languages',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)'
      },
      {
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false
      }
    ]);
  };
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    console.log(portfolioData);
  });
// const fs = require('fs');

// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });




































// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// // var message = 'Hello Node!';
// // console.log(message);


// const printProfileData = (profileDataArr) => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

// // node app.js