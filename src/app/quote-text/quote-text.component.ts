import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream'; 
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  @Input() quote:Quote
  @Output() quoteDelete = new EventEmitter<boolean>()

  thumbsQuote(event){
    if(event === 'up'){
      this.quote.thumbsUp++;
    }else if(event === 'down'){
      this.quote.thumbsDown++;
    }
  }


  deleteQuote(event){
    if(confirm('Are you certain you want to delete this quote?')){
      this.quoteDelete.emit(true);
    }else{
      this.quoteDelete.emit(false);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
