import { CourseService } from "../courseService";
import { DI } from "../di";

export function injectable(target:any){
    return function(){
        let paramTypes=Reflect.getMetadata("design:paramtypes",target);
        let args=[];
        for(let index in paramTypes){
            let argItem = DI.resolve(paramTypes[index].name);
            args.push(argItem);
        }
        console.log(paramTypes);
        return new target(...args);
    }
}