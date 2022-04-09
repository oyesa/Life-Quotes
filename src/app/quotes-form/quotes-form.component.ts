import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

@output () quoteAdd = new EventEmitter<Quote>()
newQuote: Quote = new Quote(0, '', '', 0, 0)

submitQuote(){
  this.quoteAdd.emit(this.newQuote)
  this.newQuote = new Quote(0, '', '', 0, 0)
}