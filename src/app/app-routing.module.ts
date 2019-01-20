import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorCreateComponent} from './author-create/author-create.component';
import {AuthorSearchComponent} from './author-search/author-search.component';

const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full' },
  { path: 'authors', component: AuthorListComponent },
  { path: 'add', component: AuthorCreateComponent },
  { path: 'findbyfullname', component: AuthorSearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
