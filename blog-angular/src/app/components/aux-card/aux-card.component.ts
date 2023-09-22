import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aux-card',
  templateUrl: './aux-card.component.html',
  styleUrls: ['./aux-card.component.css']
})
export class AuxCardComponent implements OnInit {

  @Input() img:string=""
  @Input() title:string=""
  @Input() imgLargura:string = "270px"
  @Input() imgAltura:string = "150px"
  @Input() titleSize:string = "1.5rem"  
  @Input() cardSize:string = "40rem"
  @Input() backColor:string = ""


  constructor() { }

  ngOnInit(): void {
  }
  getImgStyle() {
    return {
      'max-width': this.imgLargura,
      'min-width': this.imgLargura,
      'max-height': this.imgAltura,
      'min-height': this.imgAltura
    };
  }

}
