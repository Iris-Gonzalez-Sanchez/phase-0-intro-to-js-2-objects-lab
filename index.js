// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let obj = { ...employee};
    obj[key] = value;
    return obj;
}

let employee = {
    name : "Joanna",
    streetAddress : "41- Biberry St",
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee};
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};