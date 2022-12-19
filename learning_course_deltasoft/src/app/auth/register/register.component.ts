import { Component, OnInit } from '@angular/core';
import { LoginForm, RegisterForm } from 'src/app/type/auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit
{

  constructor(private authService: AuthService){}

  ngOnInit(): void {
  }
  
  form: RegisterForm = {
    password:'',
    confirm_password:'',
    email :'',
  }


  submit(){
 this.authService.register(this.form);
 }

 isLoading(){
  return this.authService.isLoading;
 }
}
