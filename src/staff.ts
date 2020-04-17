import {Person} from "./person";
export class Staff extends Person{
	public startDate:Date;
	
	constructor(fullName:string, age:number, email:string, job:string, address:string, startDate:Date){
		super(fullName, age, email, job, address);
		this.startDate=startDate;
	}
	public printInfo():void{
		super.printInfo();
		console.log("Start working date:"+ this.startDate);
	}
}