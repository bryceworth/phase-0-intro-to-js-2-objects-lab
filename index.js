// Write your solution in this file!
const employee = {
 Sam: {
     key: "streetAdress"
     
 }
}

function updateEmployeeWithKeyAndValue(employee, key, value){
 const newEmployee = {...employee}
 newEmployee[key] = value
 return newEmployee
}

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = employee
    newEmployee[key] = value
 return newEmployee

}
 newEmployee.value = "12 Broadway"

 function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee}
    delete newEmployee[key]
    return newEmployee
 }
 
function destructivelyDeleteFromEmployeeByKey(employee, key){
    // const newEmployee = employee
    // delete newEmployee[key]
    // return newEmployee
    delete employee[key]
    return employee
}