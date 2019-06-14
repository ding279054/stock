export class Stock {
  // favorite = true;
  favorite = false;

  constructor(public name: string,
              public code: string,
              public price: number,
              public lastprice: number,
              public exchange: string) {}

    isPositivechange(): boolean {
      return this.price >= this.lastprice;
    }
}
