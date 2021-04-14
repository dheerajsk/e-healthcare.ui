import { Component, OnInit } from '@angular/core';
import { CartModel } from '../../cart.model';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-cart-main',
  templateUrl: './cart-main.component.html',
  styleUrls: ['./cart-main.component.css']
})
export class CartMainComponent implements OnInit {

  constructor(private service: CartService) { }
  cart: CartModel;
  totalAmount: number;

  ngOnInit(): void {
    this.service.get().subscribe(
      (res) => {
        this.cart = res;
        this.totalAmount = this.cart.items.map(i => i.product).map(i => i.price).reduce((a, b) => a + b, 0);
      }
    )
  }

}
