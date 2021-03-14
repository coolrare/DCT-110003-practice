import { ArticleService } from './article.service';
import { Article } from './article';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  constructor(private articleService: ArticleService) { }

  transform(articles: Article[], keyword: string):  Article[] {
    if(keyword === ''){
      return articles;
    }
    return this.articleService.filterArticlesByKeyword(articles, keyword);
  }

}
