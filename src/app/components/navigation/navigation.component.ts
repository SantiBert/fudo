import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  catogories = [
    'business', 
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
  ]

  constructor(
    private service:NewsService,
    private router:Router,
  ) { }

  selectedCategory(category: string) {
    this.router.navigate([category]);
  }

  ngOnInit() {
  }

}
