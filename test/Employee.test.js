const Employee = require('../lib/Employee');

//Example Testing Syntax
describe("Employee", () => {

  //Employee Name Test
  it('should return the correct name', () => {
    //Arrange
    const newEmployee = new Employee('Pete', '1', 'pete@gmail.com');

    //Assert
    expect(newEmployee.getName()).toEqual('Pete');
  })

  it('should return the correct id', () => {
    //Arrange
    const newEmployee = new Employee('Pete', '1', 'pete@gmail.com');

    //Assert
    expect(newEmployee.getId()).toEqual('1');
  })

  it('should return the correct email', () => {
    //Arrange
    const newEmployee = new Employee('Pete', '1', 'pete@gmail.com');

    //Assert
    expect(newEmployee.getEmail()).toEqual('pete@gmail.com');
  })

  it('should return the correct role', () => {
    //Arrange
    const newEmployee = new Employee('Pete', '1', 'pete@gmail.com');

    //Assert
    expect(newEmployee.getRole()).toEqual('Employee');
  })
})