import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.page.html',
  styleUrls: ['./creators.page.scss'],
})
export class CreatorsPage implements OnInit {

  
  listCreators = [
    {img: "avatar.png", name: "Marjolaine VILAIN", job: "Développeuse Full-Stack"}, 
    {img: "lela.jpg", name: "Lela VILAIN", job: "Directrice générale"}, 
    {img: "canelle.jfif", name: "Cannelle POMBOURCQ", job: "Cheffe de projet"} 
  ]

  constructor() { }

  ngOnInit() {
  }

}
