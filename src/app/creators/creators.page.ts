import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss'],
})
export class CreatorsPage implements OnInit {

  
  listCreators = [
    {img: "avatar.png", name: "Marjolaine VILAIN"}, 
    {img: "lela.jpg", name: "Lela VILAIN"}, 
    {img: "canelle.jfif", name: "Cannelle POMBOURCQ"} 
  ]

  constructor() { }

  ngOnInit() {
  }

}
