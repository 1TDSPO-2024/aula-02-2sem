const students = [
  {
    id: 1,
    name: 'Otavio',
    rm: 554513,
  },

  {
    id: 2,
    name: 'Lucy',
    rm: 123456,
  },

  {
    id: 3,
    name: 'Wesley',
    rm: 654321,
  },
];

const studentNames = students.map(student => student.name);
console.log(studentNames);

const grades = [
  {
    id: 1,
    grade: 10,
  },

  {
    id: 2,
    grade: 10,
  },

  {
    id: 3,
    grade: 10,
  },
];

const studentsWithGrades = students.map(student => {
  const gradeObj = grades.find(grade => student.id === grade.id);
  return {...student, grade: gradeObj.grade}
})
console.log(studentsWithGrades);

const gradesSum = studentsWithGrades.reduce((counter, student) => {
  return counter + student.grade;
}, 0)

console.log(gradesSum);
