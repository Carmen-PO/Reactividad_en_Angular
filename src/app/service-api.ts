import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceApi {

  posts = signal<any[]>([]); 

  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe(data => this.posts.set(data));
}

}