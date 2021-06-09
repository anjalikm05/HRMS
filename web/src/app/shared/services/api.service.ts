import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get() {
    this.http.get('http://localhost:3000');
  }

  post(path: string, body: Object) {
    return this.http
      .post(`${environment.api_url}${path}`, body )
  }
}
