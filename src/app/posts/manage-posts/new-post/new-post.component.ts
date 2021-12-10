import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  title = '';
  description = '';
  postId = '';

  constructor(private postService: PostService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.postId = params['id'];
    })
    if (this.router.routerState.snapshot.url === '/posts/' + this.postId + '/edit' ||
      this.router.routerState.snapshot.url === '/posts/manage/' + this.postId + '/edit') {
      this.postService.getPost(this.postId).then(post => {
        if (post) {
          this.title = post.title;
          this.description = post.description;
        }
      });
    }
  }

  addPost() {
    if (this.title.trim().length && this.description.trim().length) {
      const date = new Date();
      if (!this.postId) {
        const postData = {title: this.title, dateCreated: date.toString(), description: this.description};
        this.postService.addPost(postData).then();
        void this.router.navigate(['']);
      } else {
        const postData = {title: this.title, dateCreated: date.toString(), description: this.description};
        this.postService.editPost(postData, this.postId).then();

        if (this.router.routerState.snapshot.url === '/posts/' + this.postId + '/edit') {
          void this.router.navigate(['']);
        } else {
          void this.router.navigate(['posts/manage']);
        }
      }

      this.title = '';
      this.description = '';
    }
  }
}
