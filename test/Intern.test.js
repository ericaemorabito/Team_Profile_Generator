const Intern = require('../lib/Intern');

describe("Intern", () => {

  it('should return the correct name', () => {
    const newIntern = new Intern('Lily', '2', 'lily2@dev.com', 'UT Austin');

    expect(newIntern.getName()).toEqual('Lily');
  }) 

  it('should return the correct id', () => {
    const newIntern = new Intern('Lily', '2', 'lily2@dev.com', 'UT Austin');

    expect(newIntern.getId()).toEqual('2');
  }) 

  it('should return the correct email', () => {
    const newIntern = new Intern('Lily', '2', 'lily2@dev.com', 'UT Austin');

    expect(newIntern.getEmail()).toEqual('lily2@dev.com');
  }) 

  it('should return the correct github', () => {
    const newIntern = new Intern('Lily', '2', 'lily2@dev.com', 'UT Austin');

    expect(newIntern.getSchool()).toEqual('UT Austin');
  }) 

  it('should return the correct role', () => {
    const newIntern = new Intern('Lily', '2', 'lily2@dev.com', 'UT Austin');

    expect(newIntern.getRole()).toEqual('Intern');
  }) 
})