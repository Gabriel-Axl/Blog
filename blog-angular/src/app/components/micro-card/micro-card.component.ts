import { Component, Input, OnInit, OnChanges} from '@angular/core';

@Component({
  selector: 'app-micro-card',
  templateUrl: './micro-card.component.html',
  styleUrls: ['./micro-card.component.css']
})
export class MicroCardComponent implements OnInit {
  @Input() id:string ="0"
  @Input() img:string = ""
  @Input() title:string = ""
  constructor() { }

  ngOnInit(): void {
  }
  
  OnChanges(){
    
  }

}
