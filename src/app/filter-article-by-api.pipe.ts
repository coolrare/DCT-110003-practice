import { ArticleService } from './article.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './article';

@Pipe({
  name: 'filterArticleByApi',
  // pure: false
})
export class FilterArticleByApiPipe implements PipeTransform {
  articles: Article[];
  constructor(private articleService: ArticleService) {}

  transform(keyword: string): Observable<Article[]> {
    return this.articleService.getArticles(keyword);
    // this.articleService.getArticles(keyword).subscribe((data) => {
    //   this.articles = data;
    // });

    // return this.articles;
  }
}
