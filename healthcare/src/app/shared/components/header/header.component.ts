import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'E - Healthcare'
      }
      
    ];
  }
}


