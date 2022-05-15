import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { v4 as uuidv4 } from 'uuid';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  articles: any[] = [];
  dato:any;

  constructor(
    private service: NewsService,
    private router:Router,
  ) { }

  selectedCard(article: any) {
    this.router.navigate(['/new', article.id], { state: article });
  }

  getArticles(){
    this.service.getArticles().subscribe(
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
    this.getArticles();
  }

}
