import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css'],
})
export class QuotesDisplayComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(0, 'African Intellectuals', 'Each language no matter how small carries its memory of the world', 33, 0, new Date('2022,04,02')),
    new Quote(1, 'Jane Austen', 'A person may be proud without being vain, pride relates more to the opinion of ourselves, vanity to what we would have people think of us.', 99, 7, new Date('2022,03,11')),
    // new Quote(2, 'Charles Bukowski', '...But we joke and laugh otherwise we would start screaming.', 0, 0, new Date('2022,04,09'))
  ]


  toggleQuoteText(index){
    this.quotes[index].showQuoteText=!this.quotes[index].showQuoteText
  }

  // showQuoteForm: boolean=false
  // toggleQuoteForm(){
  //   this.showQuoteForm=!this.showQuoteForm;
  // }
  
  addNewQuote(quote:Quote){
    let quoteLength=this.quotes.length;
    quote.id= quoteLength++;
    this.quotes.push(quote);
  }

  // deleteQuote(event, index){
  //   if (event){
  //     this.quotes.splice(index, 1)
  //   }
  // }
  deleteQuote(isComplete:any,index:any){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete this quote?`)
      if(toDelete){
        this.quotes.splice(index,1); 
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}







