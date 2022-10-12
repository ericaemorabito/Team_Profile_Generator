const Manager = require('../lib/Manager');

describe("Manager", () => {

  it('should return the correct name', () => {
    const newManager = new Manager('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newManager.getName()).toEqual('Lily');
  }) 

  it('should return the correct id', () => {
    const newManager = new Manager('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newManager.getId()).toEqual('2');
  }) 

  it('should return the correct email', () => {
    const newManager = new Manager('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newManager.getEmail()).toEqual('lily2@dev.com');
  }) 

  it('should return the correct office number', () => {
    const newManager = new Manager('Lily', '2', 'lily2@dev.com', '1');

    expect(newManager.getOfficeNumber()).toEqual('1');
  }) 
  
  it('should return the correct role', () => {
    const newManager = new Manager('Lily', '2', 'lily2@dev.com', '1');

    expect(newManager.getRole()).toEqual('Manager');
  })

})