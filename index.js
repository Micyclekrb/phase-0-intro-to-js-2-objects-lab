const employee = {};
employee.name = "Dan";
employee.streetAddress = "123 Green Street";

const updateEmployeeWithKeyAndValue = (obj, key, value) => {
  return {...employee, [key]: value,};
};

updateEmployeeWithKeyAndValue(employee, "name", "Sam");

const destructivelyUpdateEmployeeWithKeyAndValue = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
  
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway")

const deleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    employee.name = "Sam";
    return {employee};
};
let newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

console.log(newEmployee);

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}

destructivelyDeleteFromEmployeeByKey(employee, "streetAdress");