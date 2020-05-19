import { Employee } from "./employee";

export class GenericService<TEntity>{
    private entities:Array<TEntity>;
    constructor(){
        this.entities=new Array<TEntity>();
    }
    public add(entity:TEntity):void{
        this.entities.push(entity);
    }
    public getLast():TEntity{
        return this.entities.pop();
    }
}