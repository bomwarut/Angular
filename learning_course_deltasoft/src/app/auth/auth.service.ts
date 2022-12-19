import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginForm, RegisterForm } from '../type/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthentication : boolean = false;
  isLoading : boolean = false;
  isAuthenticated: any;

  constructor(private router: Router) { }

  login(form : LoginForm){
    if (this.isLoading)return;
    this.isLoading = true;
    alert('Login success');

    const auth = getAuth();
    signInWithEmailAndPassword(auth,form.email,form.password)
    .then((userCredential) => {
      this.isAuthentication = true;
      this.router.navigate(['']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      this.isAuthentication = false;
    })
    .finally(() => (this.isLoading = false));
  }

  passwordMatched : boolean = true;

  register(form : RegisterForm){
    if (this.isLoading)return;
    this.isLoading = true;
    
   if (form.password != form.confirm_password){
     this.passwordMatched = false;
     return;
   }
 
   const auth = getAuth();
   createUserWithEmailAndPassword(auth,form.email,form.password)
   .then((userCredential) => {
    this.isAuthentication = true;
   })
   .catch((error) => {
    this.isAuthentication = false;
     const errorCode = error.code;
     const errorMessage = error.message;
   })
   .finally(() => (this.isLoading = false));
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.router.navigate(['login']);
      this.isAuthentication = false;
    }).catch((error) => {
      alert('Sorry there is a problem.');
    });
  }

}
