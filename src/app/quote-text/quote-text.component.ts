import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream'; 
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
    if(event=== 'up'){
      this.quote.thumbsUp+1
    }else if(event=== 'down'){
      this.quote.thumbsDown+1
    }
  }

  deleteQuote(){
    if(confirm('Are you certain you want to delete?')){
      this.quoteDelete.emit(true)
    }else{
      this.quoteDelete.emit(false)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }


}
