class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getMajor() {
    return this.major;
  }
}

module.exports = { Student };
