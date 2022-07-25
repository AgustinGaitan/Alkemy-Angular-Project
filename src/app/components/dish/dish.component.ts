import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {
  
  @Input() dish : any;
  @Input() time : any;
  @Output() dishToDeleteEmitter : EventEmitter<any> = new EventEmitter();

  activeDetails : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  deleteDish(dish : any){
    this.dishToDeleteEmitter.emit(dish);
  }

  seeDetails(){
    console.log(this.activeDetails);
    this.activeDetails = !this.activeDetails;
  }

}
