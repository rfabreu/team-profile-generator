const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('retrieves employee name', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('retrieves employee ID', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('retrieves employee role', () => {
    const obj = {
        name: "Jane",
        id: 1234,
        email: "raabreugomes@gmail.com"
    }
    const employee = new Employee(obj);
    expect(employee.getRole()).toEqual(expect.any(String));
});