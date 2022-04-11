import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css'],
})
export class QuotesDisplayComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(0, 'African Intellectuals', 'Each language no matter how small carries its memory of the world', 33, 0, 'Olu', new Date('2022,04,02')),
    new Quote(1, 'Jane Austen', 'A person may be proud without being vain, pride relates more to the opinion of ourselves, vanity to what we would have people think of us.', 99, 7, 'Oyesa', new Date('2022,03,11')),
    new Quote(2, 'Proverbs 4:23', 'Above all else, guard your heart, for everything you do flows from it.', 9, 3, 'Mercy', new Date('2022,02,14')),
    new Quote(2, 'A wise Earthling', 'That lesson will repeat itself until you learn it', 67, 1, 'Uncle Sam', new Date('2022,01,29')),
    new Quote(2, 'Charles Bukowski', '...But we joke and laugh otherwise we would start screaming.', 7, 0, 'Sseppa', new Date('2022,03,09')),
    new Quote(2, 'Dale Carnegie', 'Even god doesnt propose to judge a man till his last days, why should you and I?', 27, 0, 'Oluchina', new Date('2022,04,12'))
  ]


  // toggleQuoteText(index){
  //   this.quotes[index].showQuoteText=!this.quotes[index].showQuoteText
  // }

  // showQuoteForm: boolean=false
  // toggleQuoteForm(){
  //   this.showQuoteForm=!this.showQuoteForm;
  // }
  
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id= quoteLength++;
    this.quotes.push(quote);
  }

  deleteQuote(event, index){
    if (event){
      this.quotes.splice(index, 1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}







