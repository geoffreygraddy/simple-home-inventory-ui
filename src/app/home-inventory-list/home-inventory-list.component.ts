import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-inventory-list',
  templateUrl: './home-inventory-list.component.html',
  styleUrls: ['./home-inventory-list.component.css']
})
export class HomeInventoryListComponent implements OnInit {

  items = [1, 2];

  constructor() { }

  ngOnInit(): void {
  }

}
