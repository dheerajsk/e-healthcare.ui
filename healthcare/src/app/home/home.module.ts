import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SearchComponent } from './components/search/search.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [CatalogComponent, SearchComponent, ProductCardComponent, HomeComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ]
})
export class HomeModule { }
