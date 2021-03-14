import { ArticleService } from './article.service';
import { Article } from './article';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'conduit 123';
  subtitle = 'A place to share your <u>knowledge</u>.';
  keyword = 'test';

  // articles: Article[] = this.articleService.articles;

  // getter
  get articles() {
    return this.articleService.articles;
  }

  constructor(private articleService: ArticleService) {
  }

  filterArticles(keyword: string) {
    console.log(keyword);
    this.articleService.filterArticles(keyword);
  }
}
