import { Component, OnInit } from '@angular/core';
import { debounce, debounceTime, fromEvent, interval } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DishesService } from 'src/app/services/dishes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {

  filterRes : any;
  dishes : Array<string> = [];
  dishes$ : any;
  result : any;
  
  constructor(private api : ApiService, public dishService : DishesService) { }

  ngOnInit(): void {
  }


  filter(){
    
    if(this.filterRes.length > 2){
        
      this.dishes$ = this.api.getDish(this.filterRes);
      
      this.result = this.dishes$.pipe(
        debounce(()=> interval(2000)))
        .subscribe((data : any)=> {
          this.dishes = data.results
        });
       
    }
  }

  addDish(dish : any){
    console.log('dish-form para agregar', dish);
    this.dishService.addDish(dish);
  }
}
