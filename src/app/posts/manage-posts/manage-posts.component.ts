import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/post.model';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-manage-posts',
  templateUrl: './manage-posts.component.html',
  styleUrls: ['./manage-posts.component.css']
})
export class ManagePostsComponent implements OnInit {
  posts: Post[] = [];
  loading = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().then(posts => {
      this.loading = this.postService.loading;
      this.posts = posts;
    });
    this.postService.postsChange.subscribe((posts: Post[]) => {
      this.posts = posts;
    });
    this.loading = this.postService.loading;
  }

}
