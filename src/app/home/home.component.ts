import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../authFake.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number){
    // Passing Query Parameters and Fragments
    this.router.navigate(['/servers'],
      {queryParams: {allowEdit: '1'},
        fragment: 'loading...'
      }
    );
  }

  onLogIn(){
    this.authService.login();
  }
  onLogOut(){
    this.authService.logout();
  }
}
