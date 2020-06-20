export function notEmpty(errMsg:string):any{
    return function(target: any, propertyName:string, descriptor: PropertyDescriptor){
        let originalSet=descriptor.set;
        descriptor.set=function(arg:any){
            if(arg==""){
                throw errMsg;
            }
            originalSet.apply(this, [arg]);
        }
        descriptor.get=function(){
            return "this is test value";
        }
    }
}