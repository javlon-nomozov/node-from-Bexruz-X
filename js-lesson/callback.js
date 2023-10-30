const users = [
  { name: "Javlon", age: 20 },
  { name: "Bexruz", age: 25 },
];

function getUsers() {
  setTimeout(() => {
    let result = "<ul>";
    users.forEach((user) => {
      result += `<li>${user.name} ${user.age} yoshda</li></br>`;
    });
    document.body.innerHTML = result + "</ul>";
  }, 1000);
}

function addUser(user, callback) {
  setTimeout(() => {
    users.push(user);
    callback();
  }, 2000);
}

addUser({ name: "Joe", age: 30 }, getUsers);
