const Engineer = require('../lib/Engineer');

describe("Engineer", () => {

  it('should return the correct name', () => {
    const newEngineer = new Engineer('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newEngineer.getName()).toEqual('Lily');
  }) 

  it('should return the correct id', () => {
    const newEngineer = new Engineer('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newEngineer.getId()).toEqual('2');
  }) 

  it('should return the correct email', () => {
    const newEngineer = new Engineer('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newEngineer.getEmail()).toEqual('lily2@dev.com');
  }) 

  it('should return the correct github', () => {
    const newEngineer = new Engineer('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newEngineer.getGithub()).toEqual('lily2');
  }) 

  it('should return the correct role', () => {
    const newEngineer = new Engineer('Lily', '2', 'lily2@dev.com', 'lily2');

    expect(newEngineer.getRole()).toEqual('Engineer');
  }) 
})