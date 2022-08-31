import { Component } from '@angular/core';  
import { setTheme } from 'ngx-bootstrap/utils';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _authService: AuthService) { }

  title = 'saveEx';
  isCollapsed = true;
  ngDoCheck() {
    console.count('checked');
  }

  name = "Hosne Mobarak Rubai"

  public login = () => {
    this._authService.login();
  }
}
