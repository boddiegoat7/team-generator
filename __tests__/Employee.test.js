const Employee = require("../lib/Employee");


test(" For the Employee object ", () => {
  const E = new Employee();
  expect(typeof (E)).toBe("object");
});

test(" For the Employee name ", () => {
  const name = "Victor";
  const E = new Employee(name);
  expect(E.name).toBe(name);
});

test(" For the employee id ", () => {
  const id = 111;
  const E = new Employee("Victor", 111);
  expect(E.id).toBe(id);
});

test(" For the employee email ", () => {
  const email = "victorboddie21@gmail.com";
  const E = new Employee("victor", 111, email);
  expect(E.email).toBe(email);
});

test(" For the employee role ", () => {
  const role = "Employee";
  const E = new Employee("victor", 111, "victorboddie21@gmail.com", role);
  expect(E.role).toBe(role);
});
