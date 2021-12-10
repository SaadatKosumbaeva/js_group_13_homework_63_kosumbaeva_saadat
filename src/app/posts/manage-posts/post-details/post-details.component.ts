import { Component, OnInit } from '@angular/core';
import { Post } from '../../../shared/post.model';
import { PostService } from '../../../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post | undefined = undefined;

  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const postId = params['id'];
      this.postService.getPost(postId).then(post => {
        this.post = post;
      })
    })
  }

}
