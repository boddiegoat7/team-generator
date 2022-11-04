const Intern = require("../lib/Intern");

test(" To set the school ", () => {
    const value = "SUNY PLATTSBURGH";
    const intern = new Intern("victor", 1, "victorboddie21@gmail.com", value);
    expect(intern.school).toBe(value);
});

test(" If getRole() would return Intern" , () => {
    const value = "Intern";
    const intern = new Intern("Victor", 1, "victorboodie@gmail.com","SUNY PLATTSBURGH");
    expect(intern.getRole()).toBe(value);
});

test(" gets the school using getSchool() fuction ", () => {
    const value = "SUNY PLATTSBURGH";
    const intern = new Intern("Victor", 1, "victorboodie@gmail.com", value);
    expect(intern.getSchool()).toBe(value);
});
