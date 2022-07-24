import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {

  filterRes : any;

  constructor() { }

  ngOnInit(): void {
  }


  filter(){
    
  }
}
