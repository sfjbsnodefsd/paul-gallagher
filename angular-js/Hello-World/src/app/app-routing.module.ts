import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisteredUserComponentComponent } from './components/registered-user-component/registered-user-component.component';
import { UserFormComponent } from './components/user-form/user-form.component';

const routes: Routes = [{path: "", component:HomeComponent}, 
{path:"register", component:UserFormComponent}, {path:"registeredUser", component:RegisteredUserComponentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
