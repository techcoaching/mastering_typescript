export interface IGenericService<TEntity>{
    add(item:TEntity):void;
    getLast():TEntity;
}