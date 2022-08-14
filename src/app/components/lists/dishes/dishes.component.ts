import { Component, OnInit } from '@angular/core';
import { forkJoin, mergeMap, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DishesService } from 'src/app/services/dishes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  veganDishes : Array<any> = [];
  dishes : Array<any> = [];
  dishes$ : any;
  randomTime : Array<number> = [];
  totalTime : any;
  average : any;
  dishDelete : any;

  constructor(private api : ApiService, public dishesService : DishesService) { 

  
  }

  ngOnInit(): void {

    this.calculateTotalTime();
  }


  calculateTotalTime(){

    for(let i = 0 ; i < 4 ; i++){
      this.randomTime[i] = Math.floor(Math.random() * 10) + 1;
    }

    this.totalTime = this.randomTime.reduce((previous : number  , current : number) => previous + current);
    console.log('totalTime: ',this.totalTime);
    console.log('dishes.length ',this.dishesService.dishes.length);
    this.average = this.totalTime / (this.dishesService.dishes.length + this.dishesService.veganDishes.length);

    console.log('averageTime: ',this.totalTime);

  }

}
