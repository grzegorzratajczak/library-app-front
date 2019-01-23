import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorCreateComponent} from './author-create/author-create.component';
import {AuthorSearchComponent} from './author-search/author-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'authors', pathMatch: 'full' },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/add', component: AuthorCreateComponent },
  { path: 'authors/findbyname', component: AuthorSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
