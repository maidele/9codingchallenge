//Task 1: Creating an Employee Class

class Employee {
    constructor(name, id, department, salary) {
      this.name = name;
      this.id = id;
      this.department=department;
      this.salary=salary;
    }// Creating a class for employeee and their properties
  
    getDetails() {
      return(`Employee:${this.name}, ID: ${this.id}, Department: S{this.department}, Salary:${this.salary}`);
    }// Including a "getDetails()" method for employee's properties

  calculateAnnualSalary() {
    return this.salary*12;
  }// Including a "calculateAnnualSalary()" method for an annual salary belonging to the employee
};

const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); 
// Expected output: "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"

console.log(emp1.calculateAnnualSalary()); 
// Expected output: 60000

//Task 2:Creating a Manager Class (Inheritance & Method Overriding)
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
      super(name, id, department, salary);
      this.teamSize = teamSize;
    }
  
    getDetails() {
      return(`Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary:${this.salary}, Team Size: ${this.teamSize}` );
    
  };
  calculateBonus() {
    return this.salary*1.20;
    }
}

const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
// Expected output: "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"
console.log(mgr1.calculateBonus()); 
// Expected output: 9600

//Task 3
class Company {
    constructor(name) {
      this.name = name;
      this.employees = [];
};
  
    addEmployee(employee) {
      this.employees.push(employee);
}
  listEmployees() {
    this.employees.forEach(employee => console.log(employee.getDetails()));
    }
}
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
// Expected output:
// "Employee: Alice Johnson, ID: 101, Department: Sales, Salary: $5000"
// "Manager: John Smith, ID: 201, Department: IT, Salary: $8000, Team Size: 5"

