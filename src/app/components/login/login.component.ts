import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {UserDTO} from '../../dto/userDTO';
import {NotificationService} from '../../services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData: UserDTO = new UserDTO();

  constructor(private authService: AuthService, private notificationService: NotificationService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.logIn(this.userData).subscribe(res => {
      if (!res) {
        // console.log('log in failed');
        this.notificationService.show(2, 'Login Failed!');
      }
    });
  }
}
