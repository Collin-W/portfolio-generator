const generatePage = require('./src/page-template.js');

const fs = require('fs');
 
const profileDataArgs = process.argv.slice(2);
 
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });






































// var commandLineArgs = process.argv;
// console.log(commandLineArgs);
// // var message = 'Hello Node!';
// // console.log(message);


// const printProfileData = (profileDataArr) => {
//     profileDataArr.forEach(profileItem => console.log(profileItem));
// };
// printProfileData(profileDataArgs);

// // node app.js