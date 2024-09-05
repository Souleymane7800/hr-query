$(function() {
    // Utilisation de jQuery pour effectuer une requête AJAX
    $.getJSON('data/employees.json', function(employees) {
        $('#employee-table').DataTable({
            data: employees,
            columns: [
                { title: 'First Name', data: 'firstName' },
                { title: 'Last Name', data: 'lastName' },
                { title: 'Start Date', data: 'startDate' },
                { title: 'Department', data: 'department' },
                { title: 'Date of Birth', data: 'dateOfBirth' },
                { title: 'Street', data: 'street' },
                { title: 'City', data: 'city' },
                { title: 'State', data: 'state' },
                { title: 'Zip Code', data: 'zipCode' },
            ]
        });
    }).fail(function() {
        console.error("Failed to load employee data.");
    });
});

// $(function() {
//     const employees = JSON.parse(localStorage.getItem('employees'));

//     $('#employee-table').DataTable({
//         data: employees,
//         columns: [
//             { title: 'First Name', data: 'firstName' },
//             { title: 'Last Name', data: 'lastName' },
//             { title: 'Start Date', data: 'startDate' },
//             { title: 'Department', data: 'department' },
//             { title: 'Date of Birth', data: 'dateOfBirth' },
//             { title: 'Street', data: 'street' },
//             { title: 'City', data: 'city' },
//             { title: 'State', data: 'state' },
//             { title: 'Zip Code', data: 'zipCode' },
//         ]
//     });
// });