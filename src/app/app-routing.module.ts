import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsByCategoryListComponent } from './components/news-by-category-list/news-by-category-list.component';

const routes: Routes = [
  {
    path: '',
    component: NewsListComponent
  },
  {
    path: 'new/:id',
    component: NewsDetailComponent
  },
  {
    path: ':category',
    component: NewsByCategoryListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
