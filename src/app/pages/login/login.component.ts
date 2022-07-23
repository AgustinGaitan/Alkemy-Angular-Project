import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  disableButton : boolean = false;

  constructor(private formBuilder : FormBuilder, 
              private api : ApiService,
              private router : Router) {

    this.loginForm = this.formBuilder.group({
      email:['challenge@alkemy.org',[Validators.required, Validators.email]],
      password: ['react',[Validators.required]]
    });
    //challenge@alkemy.org
    //react
  }

  ngOnInit(): void {
  }


  login(){

     this.disableButton = true;

    this.api.getToken(this.loginForm.value)
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

    setTimeout(() => {
      this.disableButton = false;
    }, 2000);
    
  }
}
