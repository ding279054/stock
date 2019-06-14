import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy,
        SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked } from '@angular/core';
import { Stock } from '../../model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  /* template: `
  <div class="stock-con" *ngFor="let stock of stocks; even as isEven; index as i; trackBy: trackStockByCode" [class.even-item]="isEven">
  <div class="name"><h3>{{stock.name}}</h3>-<h4>({{stock.code}})</h4></div>
  <div class="price" [class.positive]="stock.isPositivechange()" [class.negative]="!stock.isPositivechange()"
     >$ {{stock.price}}</div>
  <button (click)="toggleFavorite($event, i)"
  [disabled]="stock.favorite">Add to Favorite</button>
</div>`, */
  styleUrls: ['./stock-item.component.css'],
  /* styles: [`
  .stock-con {
    border: 1px solid black;
    border-radius: 5px;
    display: inline-block;
    padding: 10px;
  }
  .even-item {
    border: 1px solid yellow;
    border-radius: 10px;
    display: inline-block;
    padding: 10px;
  }
  .stock-con .name h3,.stock-con .name h4 {
    display: inline-block;
  }
  .positive{
    color:red;
  }
  .negative{
    color:green;
  }`] */
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnChanges, OnDestroy,
            DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit  {
  // public stock: Stock;
  @Input() public stock: Stock;
  @Output() private toggleFavorite: EventEmitter<Stock>;
  @Output() private outputtest: EventEmitter<string>;
  public stocks: Array<Stock>;
  public stockClasses;
  public stockStyles;
  public test = 'test';
  /* public name: string;
  public code: string;
  public price: number;
  public lastprice: number;
  public changes: boolean;
  public favorite: boolean; */


  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
    this.outputtest = new EventEmitter();
   }

  ngOnInit() {
    // this.stock = new Stock('股票測試公司', 'TSC', 85, 80);
    this.stocks = [
      new Stock('股票測試公司1', 'TSC', 85, 80, ''),
      new Stock('股票測試公司2', 'SSC', 15, 20, ''),
      new Stock('股票測試公司3', 'LSC', 888, 777, '')
    ];
    const diff = (this.stock.price / this.stock.lastprice) - 1;
    const largeChange = Math.abs(diff) > 0.01;
    /* this.stockClasses = {
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
    console.log('StockItem component on Init');
  }

  ngAfterViewInit(): void {
    console.log('StockItem component After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('StockItem component After View Checkedc');
  }
  ngAfterContentInit(): void {
    console.log('StockItem component After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('StockItem component After Content Checked');
  }
  ngDoCheck(): void {
    console.log('StockItem component Do Check');
  }
  ngOnDestroy(): void {
    console.log('StockItem component On Destroy');
  }
  ngOnChanges(): void {
    console.log('StockItem component On Changes');
  }


  /* toggleFavorite(event) {
    console.log('toggling the favorite!', event);
    this.stock.favorite = !this.stock.favorite;
  } */
  // 加入最愛後disabled掉
 /*  toggleFavorite(event, index) {
    console.log('toggling the favorite!', index, event);
    this.stocks[index].favorite = !this.stocks[index].favorite;
  } */
  /* toggleFavorite(event) {
      this.stock.favorite = !this.stock.favorite;
  } */
  // 測試EventEmitter發射物件、字串
  onToggleFavorite(event) {
    // this.toggleFavorite.emit(this.stock);
    this.outputtest.emit(this.test);
  }

  // 以stock.code判斷DOM是否重複
  trackStockByCode(index, stock) {
    return stock.code;
  }
  changeStockPrice() {
    this.stock.price += 5;
  }





}
