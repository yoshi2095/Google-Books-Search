import { Component } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  moduleId: module.id;	
  selector: 'books',
  templateUrl: 'book.component.html',
  providers: [BookService],
})

export class BookComponent  { 
	request: any;
	query: string;
	booksData: Array<Object> = [];

	constructor(private _bookService: BookService){
		console.log('book component init');
	}

	search(){
		this.request = this._bookService.getData('https://www.googleapis.com/books/v1/volumes?q=' + this.query).
		subscribe(
			//data => this.booksData = data.items;
			data => {
				console.log(data.items);
				this.booksData = data.items,
				error => console.error('Error: ' + error)
			}
		);
	}
}