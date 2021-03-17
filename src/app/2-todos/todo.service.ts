import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo) {
    return this.http.post('...', todo).pipe( map(
      (response: any) => response.json()
      ));
  }

  getTodos() { 
    return this.http.get('...').pipe( map(
      (response: any) => response
      ));
  }

  getTodosPromise() {
    return this.http.get('...').pipe( map(
      (response: any) => response.json()
      )).toPromise();
  }

  delete(id) {
    return this.http.delete('...').pipe( map(
      (response: any) => response.json()
      ));
  }
}