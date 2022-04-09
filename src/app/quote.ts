export class Quote {
  showDescription: boolean;

  constructor(
    public id: number,
    public name: string,
    public Description: string
  ){
    this.showDescription=false;
  }
}
