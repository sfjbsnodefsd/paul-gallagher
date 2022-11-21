import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisteredUserComponentComponent } from './components/registered-user-component/registered-user-component.component';
import { InterpolationDemoComponent } from './components/interpolation-demo/interpolation-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    NavbarComponent,
    HomeComponent,
    RegisteredUserComponentComponent,
    InterpolationDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
