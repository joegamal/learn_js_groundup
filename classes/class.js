class Person{
    constructor(id, name){
        this.name = name;
        this.id = id;
    }

}

let person = new Person(50, "yusuf");

console.log(person.id);

class Employee extends Person{
    constructor(id, name, role){
        super(id, name)
        this.role = role
    }
}

let employee = new Employee(60, "pop", "dev")

console.log(employee.name)