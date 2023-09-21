import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  @Input()
  img:string=""
  @Input()
  title:string=""
  @Input()
  content:string=""
  
  constructor() { }

  ngOnInit(): void {
  }

}
