import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoalHeaderComponent } from './goal-header/goal-header.component';
import { QuoteTextComponent } from './quote-text/quote-text.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalHeaderComponent,
    QuoteTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, GoalHeaderComponent]
})
export class AppModule { }
