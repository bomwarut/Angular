//ไฟล์ที่จะถูกโหลดเป็นครั้งแรก
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookkComponent } from './bookk/bookk.component';
import { CartComponent } from './cart/cart.component';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { MemberComponent } from './member/member.component';
import { TestComponent } from './test/test.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SquareFlexComponent } from './square-flex/square-flex.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookkComponent,
    CartComponent,
    MemberComponent,
    TestComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SquareFlexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AuthModule,
    HttpClientModule,
    TestRequestModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export default class AppModule { }
