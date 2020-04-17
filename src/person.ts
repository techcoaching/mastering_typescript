import {IPerson} from "./iperson";
import {PersonGenderType, PersonConst} from "./enum";
export class Person implements IPerson{
	public name:string;
	private _fullName:string;
	public get fullName():string{
		return this._fullName;
	}
	public set fullName(val:string){
		this._fullName=val;
	}
	
	public age:number;
	public email:string;
	public job:string;
	public address: string
	public gender:PersonGenderType;// enum
	constructor(
		fullName: string,
		age: number,
		email:string,
		job: string,
		address: string){
		this.fullName=fullName;
		this.age=age;
		this.email=email;
		this.job=job;
		this.address=address;
		this.gender=PersonGenderType.Female;
	}
	private static printMaxAge():void{
		console.log("Person max age: "+ PersonConst.MAX_AGE);
	}
	public printInfo():void{
		console.log("Hello "+ this.getName());
		console.log("Your age is "+ this.age);
		Person.printMaxAge();
		console.log("Your email "+ this.email);
		console.log("Your job "+ this.job);
		console.log("Your address "+ this.address);
	}
	private getName():string{
		return this.fullName;
	}
}