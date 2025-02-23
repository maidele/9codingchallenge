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