import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private baseUrl = 'http://localhost:8080/loans';

  constructor(private http: HttpClient) {
  }

  getLoansList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
