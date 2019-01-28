import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthorDto} from './AuthorDto';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) {
  }

  private baseUrl = 'http://localhost:8080/authors';

  authorDto: AuthorDto;

  getAuthor(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getAuthorByAuthorName(authorName: string): Observable<Object> {
    return this.http.get(`${this.baseUrl}` + `ByAuthorName/${authorName}`);
  }
  createAuthor(authorName: string): Observable<any> {
    this.authorDto.authorName = authorName;
    return this.http.post(`${this.baseUrl}`, this.authorDto);
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
