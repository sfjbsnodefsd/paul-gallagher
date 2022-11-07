import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClientModule } from '@angular/common/http';
import { PensionerDetailsSchema} from './Entity/Model'
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  http: any;

  constructor(private service: WebRequestService) { }

  registerUser(PensionerDetailsSchema) {
   return  this.http.service('auth/reg',  PensionerDetailsSchema );

  }
}
