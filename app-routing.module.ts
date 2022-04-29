//APP ROUTING

//IMPORTING
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//ROUTES
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
];

//NGMODULE
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
