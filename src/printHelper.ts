import {IPerson} from "./iperson";
let helper={
    printInfo: printInfo
};
export default helper;

function printInfo(person: IPerson):void{
	person.printInfo();
}