import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CopyService {

  private baseUrl = 'http://localhost:8080/copies';

  constructor(private http: HttpClient) {
  }

  getCopiesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
