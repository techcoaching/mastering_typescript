import { CourseService } from "./courseService";
import { injectable } from "./decorators/injectable";

@injectable
export class Course{
	private service:CourseService;
	constructor(service: CourseService=null){
        this.service=service;
	}
	public print():void{
		console.log(`Name from course service:${this.service.getName()}`);
	}
}