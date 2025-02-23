// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create a table and render student data
const table = document.createElement('table');
const headerRow = table.insertRow();
headerRow.innerHTML = `<th>First Name</th><th>Location</th>`;

// Append rows for each student
studentsList.forEach(student => {
    const row = table.insertRow();
    row.innerHTML = `<td>${student.firstName}</td><td>${student.location}</td>`;
});

// Append the table to the body
document.body.appendChild(table);
