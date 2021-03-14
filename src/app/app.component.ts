import { ArticleService } from './article.service';
import { Article } from './article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'conduit 123';
  subtitle = 'A place to share your <u>knowledge</u>.';
  keyword = 'test';

  // articles: Article[] = this.articleService.articles;

  // getter
  // get articles() {
  //   return this.articleService.articles;
  // }

  articles : Article[];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe((data) => {
      console.log(data);
      this.articles = data;
    });
  }

  filterArticles(keyword: string) {
    // console.log(keyword);
    // this.articleService.filterArticles(keyword);
    this.articleService.getArticles(keyword).subscribe(data => {
      this.articles = data;
    })
  }
}
