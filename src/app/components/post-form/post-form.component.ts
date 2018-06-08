import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

import {Post} from "../../models/Post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  @Output() newPost: EventEmitter<Post> = new EventEmitter();
  @Output() updatedPost: EventEmitter<Post> = new EventEmitter();
  @Input() currentPost: Post;
  @Input() isEdit: boolean;

  constructor(private postService: PostService) {
  }

  ngOnInit() {
  }

  addPost(title, body) {
    if (!title || !body) {
      alert('please add a post');
    } else {
      this.postService.savePost({title, body, id: 102} as Post).subscribe(post => {
        console.log(post);
        this.newPost.emit(post);
        this.updatedPost.emit(post);
      });
    }
  }

  updatePost() {
    this.postService.updatePost(this.currentPost).subscribe(post => {
      console.log(post);
      //changes isEdit to false only in postForm component, so in the receiving part. It is still true at the posts
      this.isEdit = false;
      //so we emmit event back
      this.updatedPost.emit(post);
      }
    );
  }
}
