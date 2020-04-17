class Application{
    public static run(){
		console.log("Hello, this message from application");   
		//console.log("Hello a."+ getName());
		let name1:string=getName();
		//sayHello("Mr.", name1);
		//sayHello("Mrs.", "Huyen");
		let fullName:string="Tran Thanh Tu";
		let age:number = 34;
		let email: string ="contact@tranthanhtu.vn";
		let job: string = "IT";
		let address:string ="HCM";

		let person:Person=new Person(fullName, age, email, job, address);// constructor
		/*person.fullName=fullName;
		person.age=age;
		person.email=email;
		person.job=job;
		person.address="HCM";*/
		person.printInfo();// method
		//printInfo(person);
		printInfo1(fullName, age, email, job, address);
    }
}
// function printInfo(person: Person):void{
// 	person.fullName="";
// 	console.log("Hello "+ person.fullName);
// 	console.log("Your age is "+ person.age);
// 	console.log("Person max age: "+ Person.MAX_AGE);
// 	console.log("Your email "+ person.email);
// 	console.log("Your job "+ person.job);
// 	console.log("Your address "+ person.address);
	
// }

function printInfo1(fullName:string, age: number, email:string, job:string, address: string):void{
	console.log("Print Info 1 ");
	console.log("Hello "+ fullName);
	console.log("Your age is "+ age);
	console.log("Your email "+ email);
	console.log("Your job "+ job);
	console.log("Your address "+ address);
}


/** 
 * naming convention: pascal case, camel case, snake case, ...
 */
class Person{
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
	public static MAX_AGE:Number=100;
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
	}
	private static printMaxAge():void{
		console.log("Person max age: "+ Person.MAX_AGE);
	}
	public printInfo():void{
		console.log("Hello "+ this.getName());
		console.log("Your age is "+ this.age);
		Person.printMaxAge();
		//console.log("Person max age: "+ Person.MAX_AGE);
		console.log("Your email "+ this.email);
		console.log("Your job "+ this.job);
		console.log("Your address "+ this.address);
	}
	private getName():string{
		return this.fullName;
	}
}


function sayHello(namePrefix:string, name?:string):void{
	console.log("void function say hello "+namePrefix+ name);
}
function getName():string{
	return "Tu";
}


Application.run();
