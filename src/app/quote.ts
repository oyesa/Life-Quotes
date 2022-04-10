export class Quote {
  showQuoteText: boolean;

  constructor(
    public id:number,
    public quoteAuthor:string,
    public quoteText:string,
    public thumbsUp:number,
    public thumbsDown:number,
    public quoteDate:Date
  ){
    this.showQuoteText=false;
  }
}
