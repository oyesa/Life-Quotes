export class Quote {
  showQuoteText: boolean;

  constructor(
    public id:number,
    public quoteAuthor:string,
    public quoteText:string,
    public thumbsUp:number,
    public thumbsDown:number
  ){
    this.showQuoteText=false;
  }
}
