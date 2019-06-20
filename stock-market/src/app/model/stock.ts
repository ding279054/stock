export class Stock {
  // favorite = true;
  favorite = false;
  notablePeople: Person[];

  constructor(public name: string,
              public code: string,
              public price: number,
              public lastprice: number,
              public exchange: string) {
                this.notablePeople = [];
              }

    isPositivechange(): boolean {
      return this.price >= this.lastprice;
    }
  }
export class Person {
     name: string;
     title: string;
  }

