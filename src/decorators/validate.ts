export function validate(target: any, propertyName: string, descriptor:PropertyDescriptor){
    let original=descriptor.value;
    descriptor.value=function(...args:any[]){
        let propertyValidation:Array<number>=(target.__validations||{})[propertyName]||[];
        propertyValidation.forEach(paramIndex=>{
            if(args.length-1<paramIndex){
                throw `Invalid parameter for ${propertyName} at ${paramIndex}`;
            }
            if(!args[paramIndex]){
                throw `Invalid parameter for ${propertyName} at ${paramIndex}`;
            }
        });
        original.apply(this, args);
    }
}

