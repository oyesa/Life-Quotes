import { Quote } from '../quote';
import { Component, OnInit } from '@angular/core';
import { from} from 'rxjs'


@Component({
  selector: 'app-quotes-display',
  templateUrl: './quotes-display.component.html',
  styleUrls: ['./quotes-display.component.css']
})
export class QuotesDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

showQuoteForm: boolean=false

quotes: Quote[] = [
  new Quote(0, 'African Intellectuals', 'Each language no matter how small carries its memory of the world', 0, 0)
  new Quote(1, 'Jane Austen', 'A person may be proud without being vain, pride relates more to the opinion of ourselves, vanity to what we would have people think of us.', 0, 0)
  new Quote(2, 'Charles Bukowski', '...But we joke and laugh otherwise we would start screaming.', 0, 0)
]

// toggle quote

toggleQuoteText(index){
  this.quotes[index].showQuoteText=!this.quotes[index].showQuoteText
}
toggleQuoteForm(){
  this.showQuoteForm=!this.showQuoteForm
}
deleteQuote(event, index){
  if (event){
    this.quotes.splice(index, 1)
  }
}

addQuote(newquote:Quote){
  let quoted=this.quotes.length+1
  newquote.id=quoteId 

  this.quotes.push(newquote)
}