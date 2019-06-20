import { Component, ViewEncapsulation, OnInit, SimpleChanges, OnChanges,
        OnDestroy, DoCheck, AfterContentInit, AfterContentChecked,
        AfterViewInit, AfterViewChecked } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { MessageService } from '../app/services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  title = 'stock-market';
  constructor(public messageService: MessageService) {}
  ngOnInit(): void {
    this.messageService.message = 'Hello app message service';
  }
}
/* export class AppComponent implements OnInit, OnChanges, OnDestroy,
                                      DoCheck, AfterContentChecked, AfterContentInit,
                                      AfterViewChecked, AfterViewInit {
  title = 'stock-market';
  public stockobj: Stock;
  public stock: Stock;
  private counter = 1;

  ngOnInit(): void {
    this.stockobj = new Stock('股票公司input', 'TSC', 85, 80, 'none');
    console.log('app component on Init');
  } */

 /*  ngAfterViewInit(): void {
    console.log('app component After View Init');
  }
  ngAfterViewChecked(): void {
    console.log('app component After View Checkedc');
  }
  ngAfterContentInit(): void {
    console.log('app component After Content Init');
  }
  ngAfterContentChecked(): void {
    console.log('app component After Content Checked');
  }
  ngDoCheck(): void {
    console.log('app component Do Check');
  }
  ngOnDestroy(): void {
    console.log('app component On Destroy');
  }
  ngOnChanges(): void {
    console.log('app component On Changes');
  }  // onToggle(stockobj: Stock) {
    onToggle(test) {
    // console.log('favorite for stock', stockobj, 'was triggered');
    console.log('favorite for stock', test, 'was triggered');
    this.stockobj.favorite = !this.stockobj.favorite;
  }
  changeStockObject() {
    this.stockobj = new Stock('股票公司input' + this.counter++, 'TSC', 85, 80, 'none');
  }
  changeStockPrice() {
    // ChangeDetectionStrategy.Default才會更新html
    // 若為ChangeDetectionStrategy.OnPush則值會改變,但html不會刷新
    this.stockobj.price += 10;
  }
  testMathod() {
    console.log('testmathod in appcomponent triggered');
  }
} */
