import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _authService: AuthService) { }

  ngOnInit(): void {
  }
  
  public login = () => {
    this._authService.login();
  }

}
