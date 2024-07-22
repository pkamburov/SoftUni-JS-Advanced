class Company {
    departments;
    constructor () {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (typeof name !== 'string' || typeof salary !== 'number' || typeof position !== 'string' || typeof department !== 'string') {
            throw new Error('Invalid input!');
        } else if (name == '' || salary == '' || salary < 0 || position == '' || department == '') {
            throw new Error('Invalid input!');
        } else {
            if (this.departments.hasOwnProperty(department)) {
                this.departments[department].push({name, salary, position});
                return `New employee is hired. Name: ${name}. Position: ${position}`;
            } else {
                this.departments[department] = [];
                this.departments[department].push({name, salary, position});
                return `New employee is hired. Name: ${name}. Position: ${position}`;
            }
        }
    }

    bestDepartment() {
        let winnerDep = '';
        let bestAverageSalary = 0;
        for (let department in this.departments) {
            let employees = this.departments[department];
            let totalSalary = employees.reduce((sum, employee) => sum + employee.salary, 0);
            let averageSalary = totalSalary / employees.length;

            if (averageSalary > bestAverageSalary) {
                bestAverageSalary = averageSalary;
                winnerDep = department;
            }
        }

        let sortedEmployees = this.departments[winnerDep].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name)).map(employee => `${employee.name} ${employee.salary} ${employee.position}`);
        return `Best Department is: ${winnerDep}\nAverage salary: ${bestAverageSalary.toFixed(2)}\n${sortedEmployees.join('\n')}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());