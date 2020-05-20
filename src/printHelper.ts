import {IPerson} from "./iperson";
let helper={
    printInfo: printInfo
};
export default helper;

function printInfo<TEntity extends IPerson>(entity: TEntity):void{
    let temp:TEntity;
	entity.printInfo();
}