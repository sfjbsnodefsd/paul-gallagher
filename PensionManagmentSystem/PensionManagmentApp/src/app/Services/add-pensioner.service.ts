import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import NewPensioner from '../Entity/Model';
import { UserFormComponent } from '../Components/user-form/user-form.component';


@Injectable({
  providedIn: 'root'
})
export class AddPensionerService {

  postURL= "http://localhost:5000/auth/reg"
 
  constructor( http: HttpClientModule, ) { }
}


