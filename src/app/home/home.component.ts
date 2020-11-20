import { Component, OnInit } from '@angular/core';
import { flyInOut ,expand} from '../animation/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand(),
    ]
})
export class HomeComponent implements OnInit {

  ok = false;
  showspinner=false;
  constructor() { }

  ngOnInit() {
    this.showspinner=true;
    setTimeout(() => {
      this.ok= true;
      this.showspinner=false;
      
    },3000);
  
  }
  
}
