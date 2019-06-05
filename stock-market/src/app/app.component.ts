import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'stock-market';
  public stockobj: Stock;
  public stock: Stock;
  private counter = 1;

  ngOnInit(): void {
    this.stockobj = new Stock('股票公司input', 'TSC', 85, 80);
  }
  // onToggle(stockobj: Stock) {
    onToggle(test) {
    // console.log('favorite for stock', stockobj, 'was triggered');
    console.log('favorite for stock', test, 'was triggered');
    this.stockobj.favorite = !this.stockobj.favorite;
  }
  changeStockObject() {
    this.stockobj = new Stock('股票公司input' + this.counter++, 'TSC', 85, 80);
  }
  changeStockPrice() {
    // ChangeDetectionStrategy.Default才會更新html
    // 若為ChangeDetectionStrategy.OnPush則值會改變,但html不會刷新
    this.stockobj.price += 10;
  }
}
