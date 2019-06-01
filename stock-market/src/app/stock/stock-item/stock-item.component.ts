import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  public stock: Stock;
  public stockClasses;
  public stockStyles;
  /* public name: string;
  public code: string;
  public price: number;
  public lastprice: number;
  public changes: boolean;
  public favorite: boolean; */


  constructor() { }

  ngOnInit() {
    this.stock = new Stock('股票測試公司', 'TSC', 85, 80);
    const diff = (this.stock.price / this.stock.lastprice) - 1;
    const largeChange = Math.abs(diff) > 0.01;
   /*  this.stockClasses = {
      "positive": this.stock.isPositivechange(),
      "negative": !this.stock.isPositivechange(),
      "large-change": largeChange,
      "small-change": !largeChange
     }; */
    this.stockStyles = {
      "color": this.stock.isPositivechange() ? "green" : "red",
      "font-size": largeChange ? "2em" : "0.8em"
    };


    /* this.name = '股票測試公司1';
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
