import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// allows us to use the .map() function
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(public http:Http) {
    console.log('Data Service Connected...');
  }

  getPosts(){
    // maps everything from the API to JSON format
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

}
