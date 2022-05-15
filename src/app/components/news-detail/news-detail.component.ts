import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  id: any = '';
  article:any = {};
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private location:Location
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    let data:any = localStorage.getItem(this.id);
    let article:any = JSON.parse(data);
    this.article = article;
  }

}
