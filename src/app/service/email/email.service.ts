import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from 'src/assets/models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://localhost:8080/api/contato';

  enviarEmail(email :Email): Observable<any> {
    return this.http.post(`${this.baseUrl}`, email);
  }
}
