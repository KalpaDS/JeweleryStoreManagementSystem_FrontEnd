import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GemDTO} from '../dto/gemDTO';

@Injectable({
  providedIn: 'root'
})
export class GemService {
  private baseURL = environment.baseUrl;
  private url = 'gems';

  constructor(private http: HttpClient) {
  }

  getAllGem(): Observable<Array<GemDTO>> {
    return this.http.get<Array<GemDTO>>(this.baseURL + this.url);
  }

  saveGem(gem: GemDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + this.url, gem);
  }

  deleteGem(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseURL + this.url + '/' + id);
  }

  getGemCount(): Observable<number> {
    return this.http.get<number>(this.baseURL + this.url + '/count');
  }
}
