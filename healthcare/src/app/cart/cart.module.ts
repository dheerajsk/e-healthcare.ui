import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';



@NgModule({
  declarations: [CartItemComponent, OrderSummaryComponent, OrderConfirmationComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
