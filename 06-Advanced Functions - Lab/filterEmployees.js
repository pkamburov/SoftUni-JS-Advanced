function employeeFilter (input, criteria) {
    let inputObj = JSON.parse(input);
    let result = [];

    if (criteria === 'all') {
        inputObj.forEach(employee => {
           result.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    } else {
        let [property, value] = criteria.split('-');
        inputObj.filter(employee => employee[property] == value)
            .forEach(employee => {
                result.push(`${employee.first_name} ${employee.last_name} - ${employee.email}`);
            })
    }

    for (let i = 0; i < result.length; i++) {
        console.log(`${i}. ${result[i]}`);
    }
}

employeeFilter(`[{

    "id": "1",
    
    "first_name": "Ardine",
    
    "last_name": "Bassam",
    
    "email": "abassam0@cnn.com",
    
    "gender": "Female"
    
    }, {
    
    "id": "2",
    
    "first_name": "Kizzee",
    
    "last_name": "Jost",
    
    "email": "kjost1@forbes.com",
    
    "gender": "Female"
    
    },
    
    {
    
    "id": "3",
    
    "first_name": "Evanne",
    
    "last_name": "Maldin",
    
    "email": "emaldin2@hostgator.com",
    
    "gender": "Male"
    
    }]`,
    
    'gender-Female');