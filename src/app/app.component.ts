import { User } from './auth/user';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  authenticated$: Observable<boolean>;
  user$: Observable<User>;

  constructor(private authService: AuthService) {
    this.authenticated$ = this.authService.isAuthenticated();
    this.user$ = this.authService.getUser();
  }
}
