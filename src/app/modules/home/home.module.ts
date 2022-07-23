import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DishesComponent } from 'src/app/components/lists/dishes/dishes.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    DishesComponent
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    FormsModule,
  ],
})
export class HomeModule { }