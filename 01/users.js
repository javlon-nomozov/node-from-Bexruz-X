class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  hello() {
    const text = `Hello I'm ${this.name} and ${this.age} years old `;
    // console.log(text);
    return text;
  }
}

module.exports = User;
