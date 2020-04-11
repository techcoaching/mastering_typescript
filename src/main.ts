class Application{
    public static run(){
		console.log("Hello, this message from application");   
		//console.log("Hello a."+ getName());
		let name1:string|number=getName();
		let name2:string|number=10;
		sayHello("Mr.", name1);
		sayHello("Mrs.", true);
    }
}

function sayHello(namePrefix:string, name?:string|number|boolean):void{
	console.log("void function say hello "+namePrefix+ name);
}
function getName():string|number{
	return 1;
}


Application.run();
