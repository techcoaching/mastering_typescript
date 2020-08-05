import Staff = require("./staff");
import {Course} from "./course";
import { CourseService } from "./courseService";
import {DI}  from "./di";

class Application{
    public static run(){
		DI.register("CourseService", CourseService);
		let course:Course = new Course();
		course.print();

		// console.log("Hello, this message from application");   
		// let fullName:string="Tran Thanh Tu";
		// let age:number =35;
		// let email: string ="contact@tranthanhtu.vn";
		// let job: string = "IT";
		// let address:string ="HCM";

		// let person:Person=new Person(fullName, age, email, job, address);// constructor
		// //person.fullName="";
		// console.log(person.fullName);
		// if(!validateHelper.isValid(person)){
		// 	throw "Person was invalid state";
		
		// }
		// console.log("Person object was saved");
		// do other stuff
		// before save repository
		///
		 //// property decorator
    }
}

Application.run();
