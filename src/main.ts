import {Person} from "./person";
import {Employee}  from "./employee";
import Staff = require("./staff");
import helper from "./printHelper";
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
		
		helper.printInfo(person);
		helper.printInfo(employee);
		helper.printInfo(staff);
    }
}

Application.run();
