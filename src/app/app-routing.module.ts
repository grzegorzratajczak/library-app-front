import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorListComponent} from './author-list/author-list.component';
import {AuthorCreateComponent} from './author-create/author-create.component';
import {AuthorSearchComponent} from './author-search/author-search.component';
import {BookListComponent} from './book-list/book-list.component';
import {CopyListComponent} from './copy-list/copy-list.component';
import {LoanListComponent} from './loan-list/loan-list.component';

const routes: Routes = [
  { path: 'authors', component: AuthorListComponent },
  { path: 'authorsCreate', component: AuthorCreateComponent },
  { path: 'authorsSearch', component: AuthorSearchComponent },
  { path: 'books', component: BookListComponent },
  { path: 'copys', component: CopyListComponent },
  { path: 'loans', component: LoanListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
