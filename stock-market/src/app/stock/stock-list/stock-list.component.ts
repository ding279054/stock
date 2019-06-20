import { Component, OnInit } from '@angular/core';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../model/stock';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  public stocks: Stock[];
  public stocks$: Observable<Stock[]>;
  constructor(private stockService: StockService) { }

  ngOnInit() {
    // this.stockService.getStocks().subscribe(stocks => { this.stocks = stocks; });
    this.stocks$ = this.stockService.getStocks();
    // this.stocks = this.stockService.getStocks();
    /* this.stocks = [
      new Stock('股票測試公司1', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('股票測試公司2', 'SSC', 15, 20, 'NSE'),
      new Stock('股票測試公司3', 'LSC', 888, 777, 'NYSE')
    ]; */
  }


  onToggleFavorite(stock: Stock) {
    console.log('toggling the favorite!', stock);
    // stock.favorite = !stock.favorite;
    this.stockService.toggleFavorite(stock);
  }
  // 加入最愛後disabled掉
/*   toggleFavorite(event, index) {
    console.log('toggling the favorite!', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  } */
  /* toggleFavorite(event) {
      this.stock.favorite = !this.stock.favorite;
  } */

}
