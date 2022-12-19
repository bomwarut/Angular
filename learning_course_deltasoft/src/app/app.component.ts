import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { AuthService } from './auth/auth.service';
import { firebaseConfig } from './firebase.config';

@Component({
  selector: 'app-root',
  //สองอันนี้คือurlของscss
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //
})
//คลาสappcomponentเป็นคาลสที่ถูกนำไปใช้ในapp.module
export class AppComponent implements OnInit{
  constructor(private authService:AuthService){}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
  
  isAuthenticated(){
    return this.authService.isAuthentication;
  }

  logout(){
    this.authService.logout();
  }


}
