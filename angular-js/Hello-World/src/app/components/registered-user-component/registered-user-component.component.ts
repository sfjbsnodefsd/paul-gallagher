import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import User from 'src/app/Entity/User';

@Component({
  selector: 'app-registered-user-component',
  templateUrl: './registered-user-component.component.html',
  styleUrls: ['./registered-user-component.component.css']
})
export class RegisteredUserComponentComponent implements OnInit {
 user: User[] = [];
userService: any;
  
 deleteRow(user, index){
const observables = this.userService.deleteUser
(user);
observables.subscribe((response: any) =>  {
console.log(response);
this.user.splice(index, 1) 
})


 }
 constructor() { }

  ngOnInit(): void {
    const promise = this.userService.getUsers();
    promise.subscribe((response) => {
      console.log(response);
      this.user = response as unknown as User[]
    }
  )}

}
