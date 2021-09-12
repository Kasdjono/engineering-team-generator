const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {

    super(name, id, email);
    this.role = 'Manager';
    this.officeNumber = officeNum;

  }

  getRole(){
    return this.role
  }

  getOfficeNumber(){
    return this.officeNumber
  }
}
module.exports = Manager; 