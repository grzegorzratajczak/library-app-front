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

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorDetailsComponent,
    AuthorListComponent,
    AuthorSearchComponent
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
