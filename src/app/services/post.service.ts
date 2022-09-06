import { Injectable } from '@angular/core';
import { Post } from "../models/Post";
import { Category } from "../enum";
import { storePosts } from "./posts";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  id: number = 6;

  posts: Post[] = storePosts;

  constructor() { }

  savePost(post: Post): void {
    post.id = this.id;
    this.posts.push(post);
    this.id = this.id++;
  }

  getPost(id: number): Post {
    return this.posts.find(post => post.id === id);
  }

  getAll(): Post[] {
    return this.posts;
  }

  filterForCategory(category: number): Post[] {
    if (category == Category.NENHUMA) {
      return this.posts;
    }
    return this.posts.filter(post => post.category == category)
  }

}
