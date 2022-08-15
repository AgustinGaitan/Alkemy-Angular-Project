import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DishFormComponent } from 'src/app/components/dish-form/dish-form.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from '../../pages/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
  },
  {
    path:'add-dish',
    component:DishFormComponent,
    canActivate:[AuthGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
