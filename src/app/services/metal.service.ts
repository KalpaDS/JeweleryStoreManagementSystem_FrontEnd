import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {MetalDTO} from '../dto/metalDTO';
import {UpdateMetalDTO} from '../dto/update-metalDTO';

@Injectable({
  providedIn: 'root'
})
export class MetalService {
  private baseURL = environment.baseUrl;
  private url = 'metals';

  constructor(private http: HttpClient) {
  }

  getAllMetal(): Observable<Array<MetalDTO>> {
    return this.http.get<Array<MetalDTO>>(this.baseURL + this.url);
  }

  saveMetal(metal: MetalDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + this.url, metal);
  }

  deleteMetal(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseURL + this.url + '/' + id);
  }

  updateMetal(data: UpdateMetalDTO): Observable<boolean> {
    return this.http.put<boolean>(this.baseURL + this.url, data);
  }

  getMetalCount(): Observable<number> {
    return this.http.get<number>(this.baseURL + this.url + '/count');
  }
}
