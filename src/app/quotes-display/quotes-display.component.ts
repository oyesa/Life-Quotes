import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

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
  new Quote(0, 'African Intellectuals', 'Each language no matter how small carries its memory of the world')
  new Quote(1, 'Jane Austen', 'A person may be proud without being vain, pride relates more to the opinion of ourselves, vanity to what we would have people think of us.')
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