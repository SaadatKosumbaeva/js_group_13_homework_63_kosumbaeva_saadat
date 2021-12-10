import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../shared/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  title = '';
  description = '';

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  addPost() {
    if (this.title.trim().length && this.description.trim().length) {
      const date = new Date();
      const postData = {title: this.title, dateCreated: date.toString(), description: this.description};
      this.postService.addPost(postData).then();

      void this.router.navigate(['']);

      this.title = '';
      this.description = '';
    }
  }
}
