import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { RegisteredUserComponent } from './Components/registered-user/registered-user.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { PensionQuoteComponent } from './Components/pension-quote/pension-quote.component';

const routes: Routes = [{path:"", component:HomeComponent}, {path:"register", component:UserFormComponent}, {path:"registered", component:RegisteredUserComponent}, {path:"pensionquote", component:PensionQuoteComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }