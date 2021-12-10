import { Post } from './post.model';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsChange = new EventEmitter<Post[]>();
  posts: Post[] = [];
  loading = false;

  constructor(private http: HttpClient) {
  }

  async getPosts() {
    this.loading = true;
    const response = await this.http.get<{ [id: string]: Post }>('https://skosumbaeva2502-default-rtdb.firebaseio.com/posts.json').toPromise();
    this.loading = false;
    if (response === null) {
      return [];
    }
    return this.posts = Object.keys(response).map(id => {
      const postData = response[id];
      return new Post(id, postData.title, postData.dateCreated, postData.description);
    });
  }

  async getPost(id: string) {
    await this.getPosts().then(posts => {
      this.posts = posts;
    });
    return this.posts.find(post => post.id === id);
  }

  async deletePost(id: string) {
    await this.http.delete('https://skosumbaeva2502-default-rtdb.firebaseio.com/posts/' + id + '.json').toPromise();
    await this.getPosts().then(posts => {
      this.posts = posts;
    });
    this.postsChange.emit(this.posts);
  }

  async addPost(postData: object) {
    await this.http.post('https://skosumbaeva2502-default-rtdb.firebaseio.com/posts.json', postData).toPromise();
    await this.getPosts().then(posts => {
      this.posts = posts;
    });
    this.postsChange.emit(this.posts);
  }

  async editPost(postData: object, id: string) {
    await this.http.put('https://skosumbaeva2502-default-rtdb.firebaseio.com/posts/' + id + '.json', postData).toPromise();
    await this.getPosts().then(posts => {
      this.posts = posts;
    });
    this.postsChange.emit(this.posts);
  }
}
