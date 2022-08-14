import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url : string = "https://api.spoonacular.com/recipes/complexSearch?apiKey=935ef93e69ea4383a6755b868e8297f6";
  urlLogin : string = "http://challenge-react.alkemy.org/";

  // dishes : Array<Object> = [
  //   {title:'Comida 1'},
  //   {title:'Comida 2'},
  // ];

  // veganDishes : Array<Object> = [
  //   {title:'Comida vegana 1'},
  //   {title: 'Comida vegana 2'}
  // ]

  constructor(private http : HttpClient) { 


  }

  getToken(user : any){

    //challenge@alkemy.org
    //react
    let body : any = {
      email: user.email,
      password: user.password
    }
    
    return this.http.post(this.urlLogin, body);

  }

  getVeganDishes(){
    
    return this.http.get(`${this.url}&number=2&diet=Vegan`,{headers:{'Content-Type':'application/json'}});

  }

  getDishes(){
    
    return this.http.get(`${this.url}&number=2&cuisine=italian&includeIngredients=cheese`,{headers:{'Content-Type':'application/json'}});

  }

  getDish(query : string){
    return this.http.get(`${this.url}&query=${query}`,{headers:{'Content-Type':'application/json'}});
  }
}
