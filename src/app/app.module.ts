import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicketPgComponent } from './ticket-pg/ticket-pg.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketPgComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
