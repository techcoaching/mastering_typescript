import {Person} from "./person";
import {Employee}  from "./employee";
import Staff = require("./staff");
import helper from "./printHelper";
import {PersonService} from "./personService";
import {EmployeeService}  from "./employeeService";
import{GenericService} from "./genericService"; 
import { IPerson } from "./iperson";

class Application{
    public static run(){
		console.log("Hello, this message from application");   
		let fullName:string="Tran Thanh Tu";
		let age:number = 34;
		let email: string ="contact@tranthanhtu.vn";
		let job: string = "IT";
		let address:string ="HCM";

		let person:Person=new Person(fullName, age, email, job, address);// constructor
		let employee: Employee = new Employee(fullName, 35, email, job, address, "My Company");
		let staff: Staff = new Staff(fullName, 35, email, job, address, new Date(Date.now()));

		// service
		//let employeeService: EmployeeService = new EmployeeService();
		//employeeService.add(employee);
		let employeeService1: GenericService<Employee> = new GenericService<Employee>();
		employeeService1.add(employee);

		//let personService: PersonService = new PersonService();
		//personService.add(person);

		let personService1: GenericService<Person> = new GenericService<Person>();
		personService1.add(person);
		// coding technique
		////// do something
		console.log("Print current employee: Generic");
		//let currentEmployee:Employee = employeeService.getLastEmployee();
		let currentEmployee:Employee = employeeService1.getLast();
		helper.printInfo<Employee>(currentEmployee);

		console.log("Print current person info: Generic");
		let currentPerson: Person= personService1.getLast();
		helper.printInfo<Person>(currentPerson);


		//let currentPerson: Person= personService.getLastPerson();
		//helper.printInfo(currentPerson);

		//helper.printInfo(employee);
		//helper.printInfo(staff);
    }
}

Application.run();
