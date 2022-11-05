const Manager = require("../lib/Manager");

test(" Can set office number via constrictor argument", () => {
    const value = 777;
    const manager = new Manager("Victor", 777, "victorboodie@gmail.com", value);
    expect(manager.roomLocation).toBe(value);
});

test(' To see if getPosition() would return "Manager"', () => {
    const value = "Manager";
    const manager = new Manager("Victor", 777, "victorboodie@gmail.com", value);
    expect(manager.getRole()).toBe(value);
});

test(" To get office number via getOfficeNumber()", () => {
    const value = 777;
    const manager = new Manager("Victor", 777, "victorboddie21@gmail.com", value);
    expect(manager.getOfficeNumber()).toBe(value);
});
