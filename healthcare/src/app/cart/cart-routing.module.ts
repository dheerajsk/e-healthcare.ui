import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartMainComponent } from './components/cart-main/cart-main.component';

const routes: Routes = [
  {
    path: "", component: CartMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
