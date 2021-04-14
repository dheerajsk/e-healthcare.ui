import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { ProductModel } from 'src/app/product/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor(private cartService: CartService) { }

  @Input() product: ProductModel;

  ngOnInit(): void {
  }

  handleAddToCartClick(){
    this.cartService.add(this.product.id).subscribe(
      (res)=>{
        this.cartService.notifyCartUpdate();
      }
    )
  }

}
