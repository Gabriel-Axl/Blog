import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dados } from 'src/dados/dados';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() img:string = ""
  @Input() title:string = ""
  @Input() content:string = ""
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => {
        this.id = value.get('id')
        this.setComponent(this.id)
      }
    )
  }
    
  setComponent(id:string|null){
    const result = dados.filter(
      artigo => artigo.id.toString() === id
    )[0]

    if (result) {
      this.img = result.img
      this.title = result.title
      this.content = result.content
    }
  }
}
