import { Component,Input,Output,EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent {

  @Input() item:Item={
    sno: 0,
    title: '',
    desc: '',
    active: false
  };

  @Output() itemDelete:EventEmitter<Item>=new EventEmitter();


  onClick(item:Item){
    this.itemDelete.emit(item);
    console.log("on click has been triggered")
  }

}
