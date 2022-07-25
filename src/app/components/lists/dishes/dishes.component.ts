import { Component, OnInit } from '@angular/core';
import { forkJoin, mergeMap, Observable, switchMap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
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

  constructor(private api : ApiService) { 
    
    
    this.api.getVeganDishes()
    .pipe(
      switchMap( () => this.api.getDishes())
    )
    .subscribe((res : any) =>{
      console.log('Con pipe y switch map: ', res);
    });
   

    this.api.getVeganDishes()
    .subscribe({
      next: (res : any) =>{
        console.log(res);
        this.dishes = res.results;
      },
      error: (error : any) =>{

        console.log("Error: ",error);
        Swal.fire({
          title:'Error',
          text:error,
          icon: 'error'
        });
      },
      complete:() => console.log('OK')
      
    });
  
    this.api.getDishes()
    .subscribe({
      next: (res : any) =>{
        console.log(res);
        this.veganDishes = res.results;
      },
      error: (error : any) =>{

        console.log("Error: ",error);
        Swal.fire({
          title:'Error',
          text:error,
          icon: 'error'
        });
      },
      complete:() => console.log('OK')
      
    });

  }

  ngOnInit(): void {
  }

  deleteDish(dish : any){

    if(this.veganDishes.includes(dish)){

      this.veganDishes = this.dishes.filter((el : any) => el != dish);
    }else{

      this.dishes = this.dishes.filter((el : any) => el != dish);
    }
  }

  calculateTotalTime(){

    for(let i = 0 ; i < 4 ; i++){
      this.randomTime[i] = Math.floor(Math.random() * 10) + 1;
    }

    this.totalTime = this.randomTime.reduce((previous : number  , current : number) => previous + current);
    console.log('totalTime: ',this.totalTime);
    console.log('dishes.length ',this.dishes.length);
    this.average = this.totalTime / (this.dishes.length + this.veganDishes.length);

    console.log('averageTime: ',this.totalTime);

  }

}
