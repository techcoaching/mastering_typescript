/*
    let per=new Person()={};
    {
        "_validations":{
            "print":[{
                0:"fuck"
            }]
        }
    }
*/
export function required(target:any, propertyName: string, index: number){
    let validations=target.__validations||{};
    let propertyValidation:Array<number>=validations[propertyName]||[];
    propertyValidation.push(index);
    validations[propertyName]=propertyValidation;
    target.__validations=validations;
}
