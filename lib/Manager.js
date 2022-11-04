const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, roomLocation, role) {
    super(name, id, email);
    this.roomLocation = roomLocation;
    this.role = role;
    }

    getOfficeNumber() {
    return this.roomLocation;
    }

    getRole() {
    return "Manager";
    }
}

module.exports = Manager;
