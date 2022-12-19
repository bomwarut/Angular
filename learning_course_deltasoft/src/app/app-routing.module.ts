import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { TestRequestGetComponent } from './test-request/test-request-get/test-request-get.component';
import { TestComponent } from './test/test.component';
import { MemberComponent } from './member/member.component';

const routes: Routes = [
  {path: '',component:BookComponent},
  {path: 'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'test',component:TestComponent},
  {path: 'test-api',component:TestRequestGetComponent},
  {path: 'member',component:MemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
