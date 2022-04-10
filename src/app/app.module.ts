import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalHeaderComponent } from './goal-header/goal-header.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';
import { QuotesDisplayComponent } from './quotes-display/quotes-display.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { QuoteFooterComponent } from './quote-footer/quote-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GoalHeaderComponent,
    QuoteTextComponent,
    QuotesDisplayComponent,
    QuotesFormComponent,
    QuoteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
