import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api : ApiService, private router : Router) { }



  login(form : FormGroup){

    this.api.getToken(form)
    .subscribe({
      next: (res : any) => {
        localStorage.setItem("token",res.token);
        this.router.navigateByUrl('home');
      },
      error: (error : any) => {
        if(error.status === 401){
          Swal.fire({
            title:'Error',
            text:error.statusText,
            icon:'error',
          });
        }
      },
      complete: () => console.log('OK')

    });
  }

  getToken(){
    return localStorage.getItem("token") || undefined;
  }
  
}
