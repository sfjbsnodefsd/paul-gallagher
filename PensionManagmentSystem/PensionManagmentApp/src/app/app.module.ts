import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { RegisteredUserComponent } from './Components/registered-user/registered-user.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule,  NgForm,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PensionQuoteComponent } from './Components/pension-quote/pension-quote.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { FooterComponent } from './Components/footer/footer.component'




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    RegisteredUserComponent,
    HomeComponent,
    PensionQuoteComponent,
    FooterComponent,
    
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
   
    
    
    
    
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
