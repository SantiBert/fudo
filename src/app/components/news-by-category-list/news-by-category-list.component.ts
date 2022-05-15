import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-by-category-list',
  templateUrl: './news-by-category-list.component.html',
  styleUrls: ['./news-by-category-list.component.css']
})
export class NewsByCategoryListComponent implements OnInit {

  articles: any[] = [];
  dato:any;
  public category:any = '';

  constructor(
    private service: NewsService,
    private router:Router,
    private activatedRoute: ActivatedRoute,
  ) { }

  selectedCard(article: any) {
    this.router.navigate(['/new', article.id], { state: article });
  }

  async getArticles(){
    const result = await this.service.getArticlesByCategory(this.category).subscribe(
      (res:any) => {
        if(!res.articles){
          window.confirm("No hay noticias");
        } else{
          this.articles = res.articles;
          for (let i = 0; i < this.articles.length; i++) {
            let articleline; articleline = this.articles[i];
            articleline.id = uuidv4();
            localStorage.setItem(articleline.id.toString(), JSON.stringify(articleline));
          }
        }
      }
    );
  }


  ngOnInit() {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    this.getArticles();
  }

}
