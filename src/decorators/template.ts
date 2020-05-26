export function template(tpl: string){
    return function(target: any){
        target.prototype.tpl=tpl;// template
        return target;
    }    
}