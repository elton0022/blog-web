import { Injectable } from '@angular/core';
import { Post } from "../models/Post";
import { Category } from "../enum";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  id = 2;

  posts: Post[] = [{
    id: 0,
    name: "Testes sao muito importes poque testar que se esta tudo certinho entao?",
    description: "Uma descricaaooo dsadsadsdsdsa asdasdsadsada asdasdadadsadasd asdsadsadasd asdasdsadasdasd asdasdasdasdsad",
    abstract: "",
    category: Category.FILMES,
    dateAndHour: new Date(),
},
{
  id: 1,
  name: "Porque testar o som é importante muito importante para o show",
  description: "Analisando os testes em uma festa de teste",
  abstract: "<p>Assim que iniciamos nosso trabalho como desenvolvedor ou desenvolvedora, é comum pensarmos que quando criamos um software ele está finalizado assim que escrevemos a última linha de código. Neste momento não nos atentamos a uma etapa muito importante do processo de desenvolvimento, <strong>o teste</strong>. Em resumo, o teste é a etapa em que verificamos as falhas (os famosos bugs) que nossa aplicação pode ter.</p><p>Testes são tão importantes que temos um profissional especializado para essas situações. Aqui introduzimos um termo muito comum, o <strong>Quality Assurance (QA)</strong>. A tradução para ele seria algo como “garantia de qualidade” se referindo ao profissional ou área que irá garantir que um produto ou serviço está sendo oferecido da melhor forma o possível.</p><p>Definir testes em poucas linhas é complicado porque podemos abordar diversos tipos para diferentes aplicações; como mobile, frontend, backend, segurança dentre outras. <a href=\"https://www.alura.com.br/artigos/tipos-de-testes-principais-por-que-utiliza-los\">Neste artigo</a> você encontrará uma explicação ainda mais completa sobre as mais comuns.</p>",
  category: 4,
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
    console.log(this.posts);
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
