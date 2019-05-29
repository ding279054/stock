import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  /* public name: string;
  public code: string;
  public price: number;
  public lastprice: number;
  public changes: boolean;
  public favorite: boolean; */


  constructor() { }

  ngOnInit() {
    this.stock = new Stock('股票測試公司', 'TSC', 85, 80);
    /* this.name = '股票測試公司';
    this.code = 'TSC';
    this.price = 85;
    this.lastprice = 80;
    this.changes = this.price >= this.lastprice;
    this.favorite = false; */
  }

  toggleFavorite(event) {
    console.log('toggling the favorite!', event);
    this.stock.favorite = !this.stock.favorite;
  }
}
