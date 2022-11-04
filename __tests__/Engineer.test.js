const Engineer = require("../lib/Engineer");

test(" to find the guthub user ", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Victor", 1, "test@test.com", value);
  expect(engineer.github).toBe(value);
});

test(" To get the role ", () => {
  const value = "Engineer";
  const engineer = new Engineer("Victor", 1, "victorboodie@gmail.com", "GitHubUser");
  expect(engineer.getRole()).toBe(value);
});

test(" Get GitHub username via getGithub() function ", () => {
  const value = "GitHubUser";
  const engineer = new Engineer("Victor", 1, "victorboodie@gmail.com", value);
  expect(engineer.getGithub()).toBe(value);
});