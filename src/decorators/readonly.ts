export function readonly(ro:boolean){
    return function(target: any, methodName:string, descriptor: PropertyDescriptor){
        descriptor.writable=!ro;
    }
}
