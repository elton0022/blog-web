import { Category } from "../enum";

export function returnURL(category: number) {

    const dir: string = "../../../assets/images";

    const defaultImg: string = `${dir}/card-background.jpg`;

    switch (category) {
      case Category.NENHUMA:
        return defaultImg;

      case Category.ESPORTES:
        return `${dir}/sports-background.jpg`;

      case Category.FILMES:
        return `${dir}/movies-background.jpg`;

      case Category.FESTAS:
        return `${dir}/parties-background.jpg`;

      case Category.NOTICIAS:
        return `${dir}/news-background.jpg`;

      default:
        return defaultImg;
    }
  }