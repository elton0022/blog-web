import { Injectable } from '@angular/core';
import { Post } from "../models/Post";
import { Category } from "../enum";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  id = 1;

  posts: Post[] = [{
    id: 0,
    name: "Testess",
    description: "Uma descricaaooo dsadsadsdsdsa asdasdsadsada asdasdadadsadasd asdsadsadasd asdasdsadasdasd asdasdasdasdsad",
    abstract: "",
    category: Category.FILMES,
    dateAndHour: new Date(),
}];

  constructor() { }

  savePost(post: Post) {
    post.id = this.id;
    console.log(this.posts);
    this.posts.push(post);
    this.id = this.id + 1;
  }

  getPost(id: number) {
    for (let post of this.posts) {
      if (post.id === id) {
        return post;
      }
    }
    return null;
  }

  getAll() {
    return this.posts;
  }

  removePost(id: number) {
    this.posts = this.posts.filter(post => post.id != id);
  }

  updatePost(id: number, postUpdated: Post) {
    function update(item, index, list) {
      if (list[index].id === id) {
        list[index] = postUpdated;
      }
    }
    this.posts.forEach(update);
  }

  filterForDateAndHour(dateTime: string) {
    return this.posts.filter(post => this.compareDates(dateTime, post))
  }

  filterForCategory(category: number) {
    if(category == Category.NENHUMA){
      return this.posts  
    }
    return this.posts.filter(post => post.category == category)
  }

  private compareDates(dateTime: string, post: Post): boolean {
    let dateCurrentPost = dateTime.split('T')[0];
    let hoursCurrentPost = dateTime.split('T')[1];

    let postSearchDate = post.dateAndHour.toISOString().split('T')[0];
    let postSearchHour = post.dateAndHour.getHours() + ":" + post.dateAndHour.getMinutes();

    return dateCurrentPost == postSearchDate && hoursCurrentPost == postSearchHour;
  }

}
