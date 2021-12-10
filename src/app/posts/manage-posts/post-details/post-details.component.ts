import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/post.model';
import { PostService } from '../../../shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined = undefined;
  postId = '';

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
      this.postService.getPost(this.postId).then(post => {
        this.post = post;
      })
    })
  }

  deletePost() {
    this.postService.deletePost(this.postId).then();
    if (this.router.routerState.snapshot.url === '/posts/' + this.postId) {
      void this.router.navigate(['']);
    } else {
      void this.router.navigate(['posts/manage']);
    }
  }
}
