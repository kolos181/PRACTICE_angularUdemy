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
  @Input() currentPost: Post;

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
      });
    }
  }

}
