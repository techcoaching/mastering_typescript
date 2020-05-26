//factory decorator
export function template(option: any):any{
    return function(target: any){
        console.log("template");
        //reflect metadata
        target.prototype.option=option;
    }
}
