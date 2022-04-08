import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  numberOfLikes! : number;
  constructor() { }

  ngOnInit(): void {
  }

}
