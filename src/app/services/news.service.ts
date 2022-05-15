import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor(
    private http: HttpClient,
  ) { }

  getArticles(): Observable<Response>{
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=8ab9f6a80b5241b4ba7f0b3938ea683e')
  }

  getArticlesByCategory(category:string):Observable<Response>{
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8ab9f6a80b5241b4ba7f0b3938ea683e`)
  }
}
