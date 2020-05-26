import {IPerson} from "./iperson";
let helper={
    printInfo: printInfo,
    printInfoWithTemplate: printInfoWithTemplate
};
export default helper;

function printInfo<TEntity extends IPerson>(entity: TEntity):void{
	entity.printInfo();
}

function printInfoWithTemplate(obj: any){
    let tpl:string=obj.tpl;
    for(let pro in obj){
        tpl=tpl.replace(`{{${pro}}}`, obj[pro])    
    }
    window.document.body.innerHTML+=tpl;
}