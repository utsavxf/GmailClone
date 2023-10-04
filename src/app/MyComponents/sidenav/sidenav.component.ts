import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent  {
   
  title:string
  desc:string
  
  @Output() itemAdd:EventEmitter<Item>=new EventEmitter();


  constructor(){
    this.title="",
    this.desc=""
  
  }



  isComposeVisible: boolean = false;

  toggleCompose(): void {
    this.isComposeVisible = !this.isComposeVisible;
  }


  OnSubmit(){
    const item:Item = {
      sno:8,
      title: this.title,
      desc: this.desc,
      active: true
    };
 
    this.itemAdd.emit(item)
    
  }




}
