// var commandLineArgs = process.argv;
// console.log(commandLineArgs);

const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// var message = 'Hello Node!';
// console.log(message);


const printProfileData = (profileDataArr) => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};
printProfileData(profileDataArgs);

// node app.js