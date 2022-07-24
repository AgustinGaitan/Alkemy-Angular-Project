import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.scss']
})
export class DishComponent implements OnInit {

  @Input() dish : any;
  @Output() dishToDeleteEmitter : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  DeleteDish(dish : any){
    this.dishToDeleteEmitter.emit(dish);
  }

}
