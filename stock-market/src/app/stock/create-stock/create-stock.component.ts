import { Component, OnInit } from '@angular/core';
import { Stock } from '../../model/stock';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
let counter = 1;
@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent {
  public nameControl = new FormControl();
  public stockForm: FormGroup;
  /* public stockForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    code: new FormControl(null, [Validators.required, Validators.maxLength(2)]),
    price: new FormControl(0, [Validators.required, Validators.min(0)])
  }); */
  public stock: Stock;
  public confirmed = false;
  public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
  constructor(private fb: FormBuilder) {
    this.createForm();
    this.stock = new Stock('test ' + counter++, 'TST', 20, 10, 'NASDAQ');
   }
   get code() { return this.stockForm.get('code'); }
  /* constructor() {
    this.stock = new Stock('', '', 0, 0, 'NASDAQ');
   } */
  /* setStockPrice(price) {
    this.stock.price = price;
    this.stock.lastprice = price;
  } */

 /*  createStock() {
    console.log('createing stock', this.stock);
  } */

  createForm() {
    this.stockForm = this.fb.group({
      name: ['test', Validators.required],
      code: [null, [Validators.required, Validators.minLength(2)]],
      price: [0, [Validators.required, Validators.min(0)]]
    });
  }

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
    // console.log('stock Form Value', this.stockForm.value);
    this.stock = Object.assign({}, this.stockForm.value);
    console.log('儲存股票', this.stock);

  }

  loadStockFromServer() {
    this.stock = new Stock('test ' + counter++, 'TST', 20, 10, 'NASDAQ');
    let stockFormModel = Object.assign({}, this.stock);
    delete stockFormModel.lastprice;
    delete stockFormModel.exchange;
    delete stockFormModel.favorite;
    // 使用setValue必須先移除無法對應的鍵值,留下的必須FormGroup內描述的完全一致
    this.stockForm.setValue(stockFormModel);
  }

  patchStockForm() {
    this.stock = new Stock(`test ${counter++}`, 'TST', 20, 10, 'NASDAQ');
    // 使用patchValue不須移除無法對應的鍵值,只會處理對應得到的部分
    this.stockForm.patchValue(this.stock);
  }

    resetForm() {
      this.stockForm.reset();
    }

}
