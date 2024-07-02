// studentList.js

/**
 * Returns an array of student objects.
 * Each object has three attributes: id (Number), firstName (String), and location (String).
 * @returns {Array} Array of student objects
 */
function getListStudents() {
    const students = [
        { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
        { id: 2, firstName: 'James', location: 'Columbia' },
        { id: 5, firstName: 'Serena', location: 'San Francisco' }
    ];
    return students;
}
module.exports = getListStudents;
