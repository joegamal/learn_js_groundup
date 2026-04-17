import { Person, Employee } from './class.js'

/**
 * prototypes 
 * objects can inherit from other objects by prototyping 
 * object can change its prototypes in run time 
 */

let person = new Person(40, "nono");
console.log(person)

let emp = new Employee(44, 'lop', 'adm');
console.log(emp + '\n####################################\n');

const obj = Object.create(Object.prototype);
console.log(obj);
console.log(typeof obj)
console.log(obj instanceof Object)
console.log(obj.__proto__)

