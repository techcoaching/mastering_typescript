
/*

registration={
    "CourseService":CourseService
}
*/
export class DI{
    private static registration:any={};
    public static register(key:string, ctor: any):void{
        DI.registration[key]=ctor;
    }
    public static resolve(key:string):any{
        if(!DI.registration[key]){ return {};}
        return new DI.registration[key]();
    }
}
