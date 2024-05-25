"use strict";
// Tasks:
// 1. Student Data: The provided code defines an interface named Student that describes
// student information like name, senior status (true/false), and whether they've completed
// their assignments (true/false).
// o Imagine this as a template for organizing student details.
// 2. Student List:
// o An array named students stores information about several students using the
// Student template. Think of this array as your class list!
// 3. Find Senior Students with Assignments (Optional):
// o The code (not shown here) has a function that might find students who are seniors
// and have completed their assignments.
// o Can you guess why this information might be helpful?
// 4. Class List Update:
// o Imagine you need to update your class list! The code (not shown here) might have
// a function that removes students who haven't completed their assignments
// (assuming only seniors are responsible).
// o Can you think of any reasons why this might be useful (consider limitations)
// making Student List
const students = [
    { name: "uzma", senior: true, Completedassignments: true },
    { name: "yusra", senior: false, Completedassignments: false },
    { name: "sania", senior: true, Completedassignments: false },
    { name: "nibah", senior: true, Completedassignments: true },
    { name: "haram", senior: true, Completedassignments: false },
];
// Find Senior Students with Assignments (Optional)
function findSeniorStudentsWithAssignments(students) {
    const seniorStudents = [];
    for (const student of students) {
        if (student.senior && student.Completedassignments) {
            seniorStudents.push(student);
        }
    }
    return seniorStudents;
}
const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("Senior students with assignments:", seniorStudentsWithAssignments);
// updated list for not a senior student and not completed assignment
function updateClassList(students) {
    const updatedList = [];
    for (const student of students) {
        if (!student.senior || student.Completedassignments) {
            updatedList.push(student);
        }
    }
    return updatedList;
}
const updatedClassList = updateClassList(students);
console.log("Updated class list:", updatedClassList);
