import { Component, OnInit } from '@angular/core';
import { Post } from '../shared/post.model';
import { PostService } from '../shared/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts!: Post[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().then(posts => {
      this.posts = posts;
    })
  }

}
