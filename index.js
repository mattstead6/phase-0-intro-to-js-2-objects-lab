// Write your solution in this file!

const employee = {
    name: "Matt",
    streetAddress: "38 Victoia Road"
}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value  }
    
    }  


// function updateEmployeeWithKeyAndValue(obj, key, value){
//     const newObj = {...obj, [key]: value}
//     return newObj;
// }


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
     obj[key] = value
     return employee
}




function deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key];
return newEmployee
}
    

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return employee;
}




































// const employee = {
//     name: "Matt",
//     streetAddress: "38 Victoria Road",
// }

// function updateEmployeeWithKeyAndValue(employee, key, value){
//     const newObj = {...employee, [key]:value}
//     return newObj;
// }


// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//     employee [key] = value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee}
//     delete newEmployee [key];
//     return newEmployee;
// }


// function destructivelyDeleteFromEmployeeByKey(employee, key){
//     delete employee[key];
//     return employee;
// }





























// const employee = {
//     name: "Matt",
//     streetAddress: "200 Smith St"
// }

// function updateEmployeeWithKeyAndValue (employee, key, value){
//     const newObj = {...employee};
//     newObj[key] = value;
//     return newObj;
// }

// function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
//     employee [key] = value;
//     return employee;
// }

// function deleteFromEmployeeByKey(employee, key){
//     const newEmployee = {...employee};
//     delete newEmployee[key];
//     return newEmployee;
// }

// function destructivelyDeleteFromEmployeeByKey (employee, key){
//     delete employee[key];
//     return employee;
// }