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
		person.print("test value");
		console.log("Person validation:", person["__validations"]);
		 ////
    }
}

Application.run();
