import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/type/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  ngOnInit(): void {
  }

   constructor(private authService:AuthService){}

  form: LoginForm = {
    password:'',
    email :'',
  }

 submit(){
  this.authService.login(this.form);
 }

 isLoading(){
  return this.authService.isLoading;
 }
}
