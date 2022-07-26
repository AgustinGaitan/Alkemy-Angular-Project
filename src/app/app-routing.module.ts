import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { OutGuard } from './guards/out.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    
    
  },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard],
    canDeactivate: [OutGuard]
  },
  {
    path:'**',
    redirectTo:'login',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
