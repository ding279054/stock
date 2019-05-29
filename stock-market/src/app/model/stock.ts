export class Stock {
  favorite = false;

  constructor(public name: string,
              public code: string,
              public price: number,
              public lastprice: number) {}

    isPositivechange(): boolean {
      return this.price >= this.lastprice;
    }
}
