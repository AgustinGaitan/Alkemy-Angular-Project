import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from 'src/app/components/lists/dishes/dishes.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { DishComponent } from 'src/app/components/dish/dish.component';
import { DishFormComponent } from 'src/app/components/dish-form/dish-form.component';



@NgModule({
  declarations: [
    HomeComponent,
    DishComponent,
    DishesComponent,
    DishFormComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
  ],
})
export class HomeModule { }
