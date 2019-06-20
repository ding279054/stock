import { Injectable } from '@angular/core';
import { Observable,  throwError as ObservadleThrow,  of as ObservadleOf} from 'rxjs';
import { Stock } from '../../app/model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[];
  constructor() {
    this.stocks = [
      new Stock('股票測試公司1', 'TSC', 85, 80, 'NASDAQ'),
      new Stock('股票測試公司2', 'SSC', 15, 20, 'NSE'),
      new Stock('股票測試公司3', 'LSC', 888, 777, 'NYSE')
    ];
  }

/*   getStocks(): Stock[] {
    return this.stocks;
  } */

  getStocks(): Observable<Stock[]> {
    return ObservadleOf(this.stocks);
  }

  /* createStock(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return false;
    }
    this.stocks.push(stock);
    return true;
  } */
  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return ObservadleThrow({msg: '此股票已存在'});
    }
    this.stocks.push(stock);
    return ObservadleOf({msg: '股票建立成功'});
  }
  toggleFavorite(stock: Stock) {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock.favorite = !foundStock.favorite;
  }

}
