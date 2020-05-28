export function errorHandler(target: any, methodName:string, descriptor: PropertyDescriptor){
    let currentMethodBody=descriptor.value;
    descriptor.value=function(...args:any[]){
        try{
            console.log(`calling ${methodName} with args:${args}`);
            let result=currentMethodBody.apply(this, args);
            console.log(`calling ${methodName} with result:${result}`);
        }catch(e){
            console.log("Inside error handler:"+ e);
        }
    }
}
