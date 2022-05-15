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
    return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=4ce98562f9184ad58fd3fae0e2b2101c')
  }

  getArticlesByCategory(category:string):Observable<Response>{
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=4ce98562f9184ad58fd3fae0e2b2101c`)
  }
}
