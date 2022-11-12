import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { RegisteredUserComponent } from './Components/registered-user/registered-user.component';
import { HomeComponent } from './Components/home/home.component';
import { FormsModule, NgForm,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PensionQuoteComponent } from './Components/pension-quote/pension-quote.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserFormComponent,
    RegisteredUserComponent,
    HomeComponent,
    PensionQuoteComponent,
    
   
   
    
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
    FormsModule,
    HttpClientModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
