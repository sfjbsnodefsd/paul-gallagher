import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
title = "Please enter your details "
Name = "";
Age = 0;
gender = "male";

save() {
  console.log(this.Name + " " + this.Age + " " + this.gender);
}
  constructor() { }

  ngOnInit(): void {
  }

}
