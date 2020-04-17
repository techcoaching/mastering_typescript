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
		let employee: Employee = new Employee(fullName, 35, email, job, address, "My Company");
		let staff: Staff = new Staff(fullName, 35, email, job, address, new Date(Date.now()));
		
		/*person.fullName=fullName;
		person.age=age;
		person.email=email;
		person.job=job;
		person.address="HCM";*/
		//person.printInfo();// method
		//console.log("Employee info");
		//employee.printInfo();
		printInfo(person);
		printInfo(employee);
		printInfo(staff);
		//printInfo1(fullName, age, email, job, address);
    }
}


function printInfo(person: IPerson):void{
	person.printInfo();
	/////////
}


interface IPerson{
	name:string;
	printInfo():void;
}

class Student{

}

/** 
 * naming convention: pascal case, camel case, snake case, ...
 */
class Person implements IPerson{
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

class Employee extends Person implements IPerson{
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
class Staff extends Person implements IPerson{
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


function sayHello(namePrefix:string, name?:string):void{
	console.log("void function say hello "+namePrefix+ name);
}
function getName():string{
	return "Tu";
}


Application.run();
