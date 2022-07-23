import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.scss']
})
export class DishesComponent implements OnInit {

  dishes : Array<any> = [];
  
  constructor(private api : ApiService) { 

    this.api.getDishes()
    .subscribe({
      next: (res : any) =>{
        console.log(res);
        this.dishes = res.products;
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
      
    })

  }

  ngOnInit(): void {
  }

}
