const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const pageGenerator = require('./src/pageTemplate');

const { writeFile } = require('./utils/generatePage');


class RunApp {
    constructor() {
        this.manager = [];
        this.engineer = [];
        this.intern = [];
        this.employeeType = "";
    }

    getEmployee() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the team's manager?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the manager's name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the ID of the team's manager?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the manager's ID.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is the email of the team's manager?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the manager's email.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'officeNumber',
                    message: "What is the manager's office number?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the manager's office number.");
                            return false;
                        }
                    }
                },
            ])
            .then(answers => {
                this.managerEmployee = new Manager(answers);
                this.manager.push(this.managerEmployee);
                this.getEmployeeType();
            });
    }

    getEmployeeType() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: "Which type of employee are you adding?",
                    choices: ['Engineer', 'Intern']
                }
            ])
            .then(answers => {
                const { employeeType } = answers;
                this.employeeType = employeeType;
                this.getFurtherInfo();
            });
    }

    getFurtherInfo(){
        if(this.employeeType === 'Intern') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is the name of the intern?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the intern's name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is the ID of this intern?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the intern's ID.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is this intern's email address?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the intern's email address.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'school',
                    message: "What school did this intern come from?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the intern's school name.");
                            return false;
                        }
                    }
                },
            ])
            .then(answers => {
                this.internEmployee = new Intern(answers);
                this.intern.push(this.internEmployee);
                this.addAnotherEmployee();
            });
        } else if (this.employeeType === 'Engineer') {
            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: "What is this engineer's name?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's name.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: "What is this engineer's ID?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's ID.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'email',
                    message: "What is this engineer's email address?",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's email.");
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'gitHub',
                    message: "Provide the engineer's GitHub username:",
                    validate: managerName => {
                        if (managerName) {
                            return true;
                        } else {
                            console.log("Please enter the engineer's GitHub username.");
                            return false;
                        }
                    }
                },
            ])
            .then(answers => {
                this.engineerEmployee = new Engineer(answers);
                this.engineer.push(this.engineerEmployee);
                this.addAnotherEmployee();
            });
        }
    }

    addAnotherEmployee() {
        inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'addAnotherEmployee',
                message: "Do you want to add another employee?",
                default: false
            }
        ])
        .then(answers => {
            if (answers.addAnotherEmployee) {
                this.getEmployeeType();
            } else {
                this.createHTML(this.manager, this.engineer, this.intern)
            }
        });
    }

    createHTML(objManager, objEngineer, objIntern) {
        const generateHTML = new pageGenerator();
        this.writeHTML(generateHTML.getHtml(objManager, objEngineer, objIntern));
    }
    writeHTML(htmlTemplate) {
        writeFile(htmlTemplate)
        console.log('Success! Go to you DIST folder to check the final page');
    }
};

new RunApp().getEmployee();