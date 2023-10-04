import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMediumScreen: boolean = window.innerWidth >= 768 && window.innerWidth < 992;

  // Add logic to update isMediumScreen based on window resize events

  constructor() { }

  ngOnInit() {
    // Initialize isMediumScreen based on the initial window width
    this.isMediumScreen = window.innerWidth >= 768 && window.innerWidth < 992;
  }



}
