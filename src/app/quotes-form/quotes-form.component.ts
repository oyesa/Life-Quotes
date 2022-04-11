import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Quote } from '../quote';
import { formatCurrency } from '@angular/common';


@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quote(0, '', '', 0, 0, '', new Date);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(f:NgForm){
    if(f.valid){
      this.addQuote.emit(this.newQuote);
      this.newQuote = new Quote(0,"","",0,0,"", new Date());
    }else{
      alert("Enter valid input")
    }
  }

  // clear for input
  clearQuoteForm(quoteForm: NgForm){
    quoteForm.reset()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
