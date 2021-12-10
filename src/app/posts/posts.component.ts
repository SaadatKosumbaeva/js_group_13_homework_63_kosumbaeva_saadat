import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().then(posts => {
      this.loading = this.postService.loading;
      this.posts = posts;
      console.log(posts);
    });
    this.postService.postsChange.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.loading = this.postService.loading;
  }
}
