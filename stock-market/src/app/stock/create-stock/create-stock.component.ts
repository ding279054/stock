import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public nameControl = new FormControl();
  public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  });
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
   }
  /* setStockPrice(price) {
    this.stock.price = price;
    this.stock.lastprice = price;
  } */

 /*  createStock() {
    console.log('createing stock', this.stock);
  } */
  createStock(stockForm) {
    // console.log('stock Form', stockForm);
    console.log('stock Form', stockForm.value);
    if (stockForm.valid) {
      this.stock = stockForm.value.stock;
      console.log('createing stock', this.stock);
    } else {
      console.log('stockForm 無效');
    }
  }

  onSubmit() {
    // console.log('Name Control Value', this.nameControl.value);
    console.log('stock Form Value', this.stockForm.value);
  }
}
