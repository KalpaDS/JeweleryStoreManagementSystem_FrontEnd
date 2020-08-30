import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {JewMakingOrderDTO} from '../dto/jew-making-orderDTO';

@Injectable({
  providedIn: 'root'
})
export class MakingOrderService {
  private baseURL = environment.baseUrl;
  private url = 'orders';

  constructor(private http: HttpClient) {
  }

  getAllJewelryMakingOrders(): Observable<Array<JewMakingOrderDTO>> {
    return this.http.get<Array<JewMakingOrderDTO>>(this.baseURL + this.url);
  }

  placeOrder(jewelryMakingOrder: JewMakingOrderDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + this.url, jewelryMakingOrder);
  }

  getOrdersCount(): Observable<number> {
    return this.http.get<number>(this.baseURL + this.url + '/count');
  }
}
