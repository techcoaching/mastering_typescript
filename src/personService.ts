import { Person } from "./person";

export class PersonService{
    public persons:Array<Person>;
    constructor(){
        this.persons=new Array<Person>();
    }
    public add(person: Person):void{
        
        this.persons.push(person);
    }
    public getLastPerson():Person{
        return this.persons.pop();
    }
}