import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';	

@Injectable()
export class BookService {

	constructor( private _http:Http ){

		console.log('book service init');
	}

	getData(url: string){
		return this._http.get(url).map(response =>{
			return response.json();
		});
	}
} 