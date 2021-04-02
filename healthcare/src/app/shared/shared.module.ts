import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import {MenubarModule} from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [ContainerComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    MenubarModule,
    ButtonModule
  ]
})
export class SharedModule { }
