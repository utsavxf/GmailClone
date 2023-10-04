import { Component,OnInit } from '@angular/core';
import { Item } from 'src/app/Item';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Item[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        sno: 1,
        title: "Linkedin",
        desc: "You have 10 new connection requests",
        active: true
      },
      {
        sno: 2,
        title: "Coding Ninjas",
        desc: "Dear Looks like you are struggling to keep up with your competitors in our leaderboard.If so, it's time to take action and reclaim your place in the top ranks or Promotion zone. to our internal hackathon",
        active: true
      },
      {
        sno: 3,
        title: "CodeForces",
        desc: "Hello, codeslayer12345.Welcome to the regular Codeforces round.  I'm glad to invite you to take part in ",
        active: true
      },
      {
        sno: 4,
        title: "MongoDbAtlas",
        desc: "Hi Utsav,Your M0 free tier cluster, Cluster0, has been idle since 2023/08/02. MongoDB Atlas will automatically pause this cluster after 60 days of inactivity, at 6:22 AM EDT on 2023/10/01.",
        active: true
      },
      {
        sno: 5,
        title: "Team Unstop",
        desc: "What’s round the corner and has raised the expectations of every Indian? 😌Cricket World Cup 2023! 🏆",
        active: true
      },
      {
        sno: 6,
        title: "Myntra",
        desc: "We have some fantastic new for you,we have reduce the convienet fees significantly",
        active: true
      },
      {
        sno: 7,
        title: "Swiggy",
        desc: "Hi Utsav Thanks for placing you order",
        active: true
      },
      {
        sno: 1,
        title: "Linkedin",
        desc: "You have 10 new connection requests",
        active: true
      },
      {
        sno: 2,
        title: "Coding Ninjas",
        desc: "Dear Looks like you are struggling to keep up with your competitors in our leaderboard.If so, it's time to take action and reclaim your place in the top ranks or Promotion zone. to our internal hackathon",
        active: true
      },
      {
        sno: 3,
        title: "CodeForces",
        desc: "Hello, codeslayer12345.Welcome to the regular Codeforces round.  I'm glad to invite you to take part in ",
        active: true
      },
      {
        sno: 4,
        title: "MongoDbAtlas",
        desc: "Hi Utsav,Your M0 free tier cluster, Cluster0, has been idle since 2023/08/02. MongoDB Atlas will automatically pause this cluster after 60 days of inactivity, at 6:22 AM EDT on 2023/10/01.",
        active: true
      },
      {
        sno: 5,
        title: "Team Unstop",
        desc: "What’s round the corner and has raised the expectations of every Indian? 😌Cricket World Cup 2023! 🏆",
        active: true
      },
      {
        sno: 6,
        title: "Myntra",
        desc: "We have some fantastic new for you,we have reduce the convienet fees significantly",
        active: true
      },
      {
        sno: 7,
        title: "Swiggy",
        desc: "Hi Utsav Thanks for placing you order",
        active: true
      },
    ];
  }

  deleteItem(item:Item){
    console.log("delter")
    const index=this.items.indexOf(item);
    this.items.splice(index,1);
  }
  


}
