import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = [];
   constructor(private http: HttpClient) {
   }

   async getPosts() {
     const response = await this.http.get<{[id: string]: Post}>('https://skosumbaeva2502-default-rtdb.firebaseio.com/posts.json').toPromise();
     this.posts = Object.keys(response).map(id => {
       const postData = response[id];
       return  new Post(id, postData.title, postData.dateCreated, postData.description);
     });
     return this.posts;
   }

   async getPost(id: string) {
     await this.getPosts().then(posts => {
       this.posts = posts;
     });
     return this.posts.find(post => post.id === id);
   }
}
