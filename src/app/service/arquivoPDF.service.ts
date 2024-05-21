import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class ArquivoPDFService {

  constructor(private http :HttpClient) { }

  private baseUrl = 'http://ec2-15-228-220-126.sa-east-1.compute.amazonaws.com:8083/api/arquivos/obterPDF';

  obterPDF(): Observable<Blob> {
    const headers = new HttpHeaders({
      'Authorization': 'Basic ' + btoa('user:password') // Substitua user:password pelos seus dados de login
    });

    return this.http.get(this.baseUrl, {
      headers: headers,
      responseType: 'blob'
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Erro ao obter o PDF:', error);
    return throwError('Erro ao obter o PDF. Por favor, tente novamente.');
  }
}
