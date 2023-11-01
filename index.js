const { Student } = require('./student');

// Create a new Student instance
const student1 = new Student('John Doe', 20, 'Computer Science');
console.log(student1.getName()); // John Doe
console.log(student1.getAge()); // 20
console.log(student1.getMajor()); // Computer Science