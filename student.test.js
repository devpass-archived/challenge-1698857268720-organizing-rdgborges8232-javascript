const { Student } = require('./student');

test('Get student name', () => {
  const student = new Student('John Doe', 20, 'Computer Science');
  expect(student.getName()).toBe('John Doe');
});

test('Get student age', () => {
  const student = new Student('John Doe', 20, 'Computer Science');
  expect(student.getAge()).toBe(20);
});

test('Get student major', () => {
  const student = new Student('John Doe', 20, 'Computer Science');
  expect(student.getMajor()).toBe('Computer Science');
});