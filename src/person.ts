import {IPerson} from "./iperson";
import * as Const from "./enum";
import {range} from "./decorators/range";
import {notEmpty} from "./decorators/notEmpty";
/*
This is person infor:Name: <name>, Age: <age>.
decorator composition
*/

export class Person implements IPerson{
	public name:string;
	private _fullName:string;
	//@notEmpty("this property was not accept empty value")
	public set fullName(val:string){
		console.log("inside set function of fullName property", val);
		this._fullName=val;
	}
	public get fullName():string{
		return this._fullName;
	}
	
	@range(5, 20)
	public age:number;
	public static MAX_AGE:number=100;
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
	public print(
		 name:string,
		 ):void{
		console.log("Inside person print method:"+ name);
	}
	public printInfo():void{
		console.log("Hello "+ this.getName());
		console.log("Your age is "+ this.age);
		console.log("Your email "+ this.email);
		console.log("Your job "+ this.job);
		console.log("Your address "+ this.address);
		//throw "just test exception";
	}
	public getName():string{
		return this.fullName;
	}
}