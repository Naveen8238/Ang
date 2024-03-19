import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  url="https://jsonplaceholder.typicode.com/posts"

  getPost(){
    return this.http.get(this.url)
  }
  deletePost(id:any){
    return this.http.delete(this.url+"/"+id)
  }
}
