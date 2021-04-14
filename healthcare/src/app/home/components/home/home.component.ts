import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/product.model';
import { ProductService } from 'src/app/product/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: ProductService) { }

  products: ProductModel[];

  ngOnInit(): void {
    this.service.get().subscribe((res) => { this.products = res });
  }

}
