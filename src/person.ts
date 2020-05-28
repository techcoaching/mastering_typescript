import {IPerson} from "./iperson";
import * as Const from "./enum";
import {template} from "./decorators/template";
import { isRequireValidation } from "./decorators/isRequireValidation";
import {readonly} from "./decorators/readonly";
import {errorHandler} from "./decorators/errorHandler";
/*
This is person infor:Name: <name>, Age: <age>.
decorator composition
*/

@isRequireValidation
@template({
	selector:"person",
	template:"This is person infor:Name: {{name}}, Age: {{age}}."
})
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
	public gender:Const.PersonGenderType;// enum
	constructor(
		fullName: string,
		age: number,
		email:string,
		job: string,
		address: string){
		this.name=fullName;
		this.fullName=fullName;
		this.age=age;
		this.email=email;
		this.job=job;
		this.address=address;
		this.gender=Const.PersonGenderType.Female;
	}
	private static printMaxAge():void{
		console.log("Person max age: "+ Const.PersonConst.MAX_AGE);
	}
	@errorHandler
	public print(name:string):void{
		console.log("Inside person print method:"+ name);
	}
	@readonly(true) /// method decorator
	@errorHandler
	public printInfo():void{
		console.log("Hello "+ this.getName());
		console.log("Your age is "+ this.age);
		console.log("Your email "+ this.email);
		console.log("Your job "+ this.job);
		console.log("Your address "+ this.address);
		//throw "just test exception";
	}
	@errorHandler
	public getName():string{
		return this.fullName;
	}
}