const Employee = require('./Employee');

class Intern extends Employee {
    constructor(objEmployee) {
        const { name, id, email } = objEmployee;
        super(objEmployee);
        const { school } = objEmployee;
        this.school = school;
    };

    getSchool() {
        return this.school;
    };

    getRole() {
        return 'Intern';
    };
};

module.exports = Intern;