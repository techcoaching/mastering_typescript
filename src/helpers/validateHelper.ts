import { range } from "../decorators/range";

let helper={
    isValid: isValid
};
export default helper;
function isValid(obj:any):boolean{
    if(!obj){return true;}
    for(let pro in obj){
        let rangeConfig=Reflect.getMetadata("range", obj, pro);
        if(!rangeConfig){continue;}
        let val=obj[pro];
        if(val < rangeConfig.from || rangeConfig.to< val){ return false;}
    }
    // if(!obj || !obj.__validationRules){return true;}
    // for(let pro in obj.__validationRules){
    //     let rule=obj.__validationRules[pro];
    //     let val=obj[rule.propertyName];// obj.age
    //     if(val < rule.from || rule.to< val){ return false;}
    // }
    return true;
}