//The function from index.js to start function
const startProgram = require('../index');

//Example Testing Syntax
describe("Employee", () => {

  //Employee Name Test
  it('should return name from input in startProgram()', () => {
    //Arrange
    let employeeName = '';
    let inputName = answers.name

    //Act
    startProgram() //? need to mock this? How? 

    //Assert
    expect(employeeName).toEqual(inputName);
  })
})