import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AddPensionerService } from 'src/app/Services/add-pensioner.service';
import NewPensioner from "src/app/Entity/Model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})


export class UserFormComponent implements OnInit {
 
 

  

  constructor(private newPensioner: AddPensionerService) {}
  ngOnInit() {
   
  }



  onSubmit(form: NgForm) {
    console.log(form.value)
    
  
   
      }


  onAddnewPensioner() {
    console.log(this.newPensioner)
  }

  display(details: any) {
    console.log(details)
  }}