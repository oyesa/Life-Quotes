import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream'; 
import {Quote} from '../quote'

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {
  [x: string]: any;

  @Input() quote!: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes: any;

  deleteQuote(complete:boolean){
    this.isComplete.emit(complete);
  }

  thumbsQuote(event){
    if(event === 'up'){
      this.quote.thumbsUp++;
    }else if(event === 'down'){
      this.quote.thumbsDown++;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }


}
