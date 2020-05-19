import { Employee } from "./employee";

export class EmployeeService{
    private employees:Array<Employee>;
    constructor(){
        this.employees=new Array<Employee>();
    }
    public add(employee:Employee):void{
        this.employees.push(employee);
    }

    public getLastEmployee():Employee{
        return this.employees.pop();
    }
}