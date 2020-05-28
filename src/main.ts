import {Person} from "./person";
import {Employee}  from "./employee";
import Staff = require("./staff");
import helper from "./printHelper";
import{GenericService} from "./genericService"; 
import {IGenericService} from "./igenericService";
import { Worker } from "./worker";
import {ObjectFactory} from "./objectFactory";

class Application{
    public static run(){
		console.log("Hello, this message from application");   
		let fullName:string="Tran Thanh Tu";
		let age:number = 34;
		let email: string ="contact@tranthanhtu.vn";
		let job: string = "IT";
		let address:string ="HCM";

		let person:Person=new Person(fullName, age, email, job, address);// constructor
		let name=person.getName();
		console.log("Person name:"+ name);
		person.print("TU Tran");
		person.printInfo();
		console.log("after person.printInfo");
		 ////
    }
}

Application.run();
