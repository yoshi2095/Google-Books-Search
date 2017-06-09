import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { BookComponent } from './components/book.component';
import { BookService } from './services/book.service';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, BookComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BookService],
})
export class AppModule { }
