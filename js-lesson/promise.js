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

function addUser(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      users.push(user);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("Xatolik");
      }
    }, 2000);
  });
}

addUser({ name: "Joe", age: 30 })
  .then(getUsers)
  .catch((err) => (document.body.innerHTML = err));
