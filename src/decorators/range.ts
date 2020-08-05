import "reflect-metadata";
export function range(from:number, to:number):any{
    return function(target:any, propertyName:string, descriptor: PropertyDescriptor){
        //target.__validationRules=target.__validationRules||{};
        //target.__validationRules[`range_${propertyName}`]={from: from, to: to, propertyName: propertyName};
        let rangeConfig={from: from, to: to, propertyName: propertyName};
        Reflect.defineMetadata("range", rangeConfig, target, propertyName);
    }
}
/*
target={
    __validationRules:{
        "range_age":{from:5, to:20, propertyName:"age"}
    }
}
reflect metadata
*/