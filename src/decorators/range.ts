export function range(from:number, to:number):any{
    return function(target:any, propertyName:string, descriptor: PropertyDescriptor){
        target.__validationRules=target.__validationRules||{};
        target.__validationRules[`range_${propertyName}`]={from: from, to: to, propertyName: propertyName};
    }
}