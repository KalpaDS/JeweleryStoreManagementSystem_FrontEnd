import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {UserDTO} from '../dto/userDTO';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment.prod';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseURL = environment.baseUrl;
  private url = 'users';

  constructor(private http: HttpClient, private router: Router) {
  }

  canAuth(): boolean {
    if (sessionStorage.getItem('token')) {
      return sessionStorage.getItem('token') === 'true';
    }
  }

  logIn(user: UserDTO): Observable<boolean> {
    return this.http.post<boolean>(this.baseURL + this.url, user)
      .pipe(map((rlt) => {
        sessionStorage.setItem('token', rlt + '');
        if (rlt) {
          this.router.navigate(['/dashboard']);
        }
        return rlt;
      }));
  }
}
