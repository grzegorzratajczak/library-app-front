import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorDetailsComponent } from './author-details/author-details.component';
import { AuthorListComponent } from './author-list/author-list.component';
import { AuthorSearchComponent } from './author-search/author-search.component';
import { BookListComponent } from './book-list/book-list.component';
import { CopyListComponent } from './copy-list/copy-list.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CopyDetailsComponent } from './copy-details/copy-details.component';
import { LoanDetailsComponent } from './loan-details/loan-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AuthorSearchComponent,
    BookListComponent,
    CopyListComponent,
    LoanListComponent,
    BookDetailsComponent,
    CopyDetailsComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
