import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aux-card',
  templateUrl: './aux-card.component.html',
  styleUrls: ['./aux-card.component.css']
})
export class AuxCardComponent implements OnInit {

  @Input()
  img:string=""
  @Input()
  title:string=""
  constructor() { }

  ngOnInit(): void {
  }

}
