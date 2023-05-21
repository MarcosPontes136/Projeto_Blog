import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Feed } from 'src/assets/models/feed';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8081/api/feed';


  public getMessage(): Observable<Feed[]> {
    return this.http.get<Feed[]>(`${this.baseUrl}`)
  }

  public feedMensagem(feed: Feed){
    return this.http.post<Feed[]>('http://localhost:8081/api/feeds', feed)
  }


}
