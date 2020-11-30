const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


// Description, 
// Table of Contents, 
// Installation, 
// Usage, 
// License, 
// Contributing, 
// Tests
// Questions

inquirer
  .prompt([
    {
      type: 'input',
      message: "Git username? **We wont ask for password",
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is the Title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Add a description:',
      name: 'description',
    },
    {
        type: 'input',
        message: 'Add installation instructions:',
        name: 'installation',
      },
    {
      type: 'input',
      message: 'Provide usage information',
      name: 'usage',
    },
    {
        type: 'list',
        message: 'Provide license',
        choices: ["MIT","Other"],
        name: 'license',
      },
      {
        type: 'input',
        message: "Contact email?",
        name: 'email',
      },
      {
        type: 'list',
        message: "README format?",
        choices: [".MD", ".ME"],
        name: 'format',
      },

  ])
  .then((data) =>{
        console.log(data);
        printFile(data);
  });


  function printFile(data){

      let filename = "README.md";

    if(data.format === ".MD"){
       filename="README.md"
    }else{
       filename="READ.ME"
    }
    //const title = JSON.stringify(data, ["title"])
    var veryBigString = "## Title \n"+ data.title+"\n\n";
    veryBigString += "## Description\n\n"+ data.description +"\n\n";
    //The addition of the table of contents is a llittle more tricky
    //I need to go through the documentation on how to add links to the readme
    veryBigString += "## Table of Contents\n\n[Installation](#installation)\n\n[Usage](#usage)\n\n[License](#license)\n\n[Contributing](#contributing)\n\n[Questions](#questions)\n\n";
  
     veryBigString += "## Installation\n\n"+ data.installation + "\n\n";
     veryBigString += "## Usage\n\n"+ data.usage + "\n\n";
     veryBigString += "## License\n\n"+ data.license + "\n\n";
     veryBigString += ("## Contributing\n\n"+ data.username + "\n\n");
     //veryBigString += ("##Tests\n\n"+ data.test + "\n\n");
     veryBigString +=("## Questions\n\n"+data.email+"\n\n");

    console.log(veryBigString);
    
    fs.writeFile(filename, veryBigString, function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      });

  };

  //We've created the skeleton of the project, we print the object of the file
  //but we need to provide a better styling for the file.

  //## TITLE should be enough
  //## actualTITLE var;
