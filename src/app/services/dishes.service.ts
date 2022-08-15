import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  dishes : Array<Object> = [];
  veganDishes : Array<Object> = [];

  constructor(private api : ApiService) { 

      this.api.getVeganDishes()
      .subscribe({
      next: (res : any) =>{
        console.log(res);
        this.dishes = res.results;
        
      },
      error: (error : any) =>{

        
        Swal.fire({
          title:'Error',
          text:error.error.message,
          icon: 'error'
        });
      },
      complete:() => this.dishes.map((el : any)=> el.type = 'non-vegan')
      
    });
  
    this.api.getDishes()
    .subscribe({
      next: (res : any) =>{
        console.log(res);
        this.veganDishes = res.results;
        
      },
      error: (error : any) =>{
        
        Swal.fire({
          title:'Error',
          text:error.error.message,
          icon: 'error'
        });
      },
      complete:() => this.veganDishes.map((el : any)=> el.type = 'vegan')
      
    });

  }


  addDish(dishToAdd : any){
    this.dishes.push(dishToAdd);
    Swal.fire({
      title:'Added',
      text:'Dish added to the menu',
      icon:'success',
      timer:2000
    })
  }

  deleteDish(dishToDelete : any){
    
    if(dishToDelete.type === 'vegan'){
      
      this.veganDishes = this.veganDishes.filter((el : any) => el.id != dishToDelete.id);
    }else{
      
      this.dishes = this.dishes.filter((el : any) => el.id != dishToDelete.id);
    }

    Swal.fire({
      title:'Deleted',
      text: `${dishToDelete.title} was removed from the menu` ,
      icon:'success',
      timer:2000
    });
  }



}
