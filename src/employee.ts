import {Person} from "./person";
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