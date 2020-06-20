import {Person} from "./person";
import Staff = require("./staff");
import validateHelper from "./helpers/validateHelper";

class Application{
    public static run(){
		console.log("Hello, this message from application");   
		let fullName:string="Tran Thanh Tu";
		let age:number =35;
		let email: string ="contact@tranthanhtu.vn";
		let job: string = "IT";
		let address:string ="HCM";

		let person:Person=new Person(fullName, age, email, job, address);// constructor
		console.log(person);
		if(!validateHelper.isValid(person)){
			throw "Person was invalid state";
		}
		console.log("Person object was saved");
		// do other stuff
		// before save repository
		///
		 //// property decorator
    }
}

Application.run();
