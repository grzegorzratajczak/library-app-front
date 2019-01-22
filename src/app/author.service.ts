import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  getAuthorByFullName(fullName: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${fullName}`);
  }

  createAuthor(author: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/create`, author);
  }

  updateAuthor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType: 'text'});
  }

  getAuthorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + `/all`);
  }
}
