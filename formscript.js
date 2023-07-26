const studentsTable = document.getElementById('studentsTable');
let studentCount = 0;

function addStudent() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const dob = document.getElementById('dob').value;
  const parentName = document.getElementById('parentName').value;
  const address = document.getElementById('address').value;
  const city = document.getElementById('city').value;
  const phone = document.getElementById('phone').value;

  // Add the new student to the table
  const newRow = studentsTable.insertRow(-1);
  const rowId = ++studentCount;
  newRow.innerHTML = `
    <td>${rowId}</td>
    <td>${fname}</td>
    <td>${lname}</td>
    <td>${dob}</td>
    <td>${parentName}</td>
    <td>${address}</td>
    <td>${city}</td>
    <td>${phone}</td>
  `;

  // Clear the form fields
  document.getElementById('studentForm').reset();
}
