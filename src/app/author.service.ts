import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from './Author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private baseUrl = 'http://localhost:8080/authors';

  constructor(private http: HttpClient) {
  }

  getAuthor(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAuthorByAuthorName(authorName: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `ByAuthorName/${authorName}`);
  }

  createAuthor(author: Author): Observable<any> {
    return this.http.post(`${this.baseUrl}`, author);
  }

  updateAuthor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getAuthorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
