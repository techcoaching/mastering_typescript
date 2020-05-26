import {Person} from "./person";
import { template } from "./decorators/template";
import {isRequireValidation} from "./decorators/isRequireValidation";
//@template("<div>This is employee info:</br><label>Company name: {{companyName}}</label><label>Email: {{email}}</label></div>")
export class Employee extends Person{
	public companyName:string;
	
	constructor(fullName:string, age:number, email:string, job:string, address:string, companyName:string){
		super(fullName, age, email, job, address);
		this.companyName=companyName;
	}
	public printInfo():void{
		super.printInfo();
		console.log("Company:"+ this.companyName);
	}
}