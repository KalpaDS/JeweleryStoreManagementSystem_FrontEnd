import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MakersDTO} from '../dto/makersDTO';

@Injectable({
  providedIn: 'root'
})
export class MakersService {
  private baseURL = environment.baseUrl;
  private url = 'makers';

  constructor(private http: HttpClient) {
  }

  getAllMakers(): Observable<Array<MakersDTO>> {
    return this.http.get<Array<MakersDTO>>(this.baseURL + this.url);
  }

  saveMakers(makers: MakersDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + this.url, makers);
  }

  deleteMakers(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseURL + this.url + '/' + id);
  }

  getMakersCount(): Observable<number> {
    return this.http.get<number>(this.baseURL + this.url + '/count');
  }
}
