export class Item{
   sno:number; 
   title:string;
   desc:string;
   active:boolean;

    //MAKE SURE TO INITIALIZE IT SO THAT NO ERROR OCCURS
    constructor(sno:number,title: string, desc: string, active: boolean) {
        this.sno=sno;
        this.title = title;
        this.desc = desc;
        this.active = active;
    }
}