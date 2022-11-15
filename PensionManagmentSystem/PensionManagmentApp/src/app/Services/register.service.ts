import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';
import { Pensioner } from '../Components/user-form/user-form.model';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root' })

export class RegisterService {
  private pensioner: Pensioner[] = [];
  private pensionerUpdated = new Subject<Pensioner[]>();


getPensioner() {
  return [...this.pensioner];
}

getPensionerUpdatedListener() {
 return this.pensionerUpdated.asObservable();
}

addPensioner(pensioner: Pensioner) {
 const newPensioner: Pensioner = {
  
   Aadhaar: undefined,
   Name: undefined,
   Dob: undefined,
   Pan: undefined,
   Salary: undefined,
   Allowances: undefined,
   SelfOrFamily: undefined,
   BankName: undefined,
   BankNumber: undefined,
   PublicOrPrivate: undefined
 };
 this.pensioner.push(newPensioner);
 this.pensionerUpdated.next([...this.pensioner])
}
  readonly AUTH_ROOT_URL: string;
  Pensioner_Detail_URL: string;
  Process_URL:string 
  
  constructor(private http: HttpClient) { 
    this.AUTH_ROOT_URL = 'http://localhost:5000';
    this.Pensioner_Detail_URL ='http://localhost:5001';
    this.Process_URL = 'http://localhost:5006/ProcessPension/:aadhaar'

  }
//registerUser(context: any) {
  //return this.http.post(`$http://localhost:5000`, JSON.stringify(context.response, () => response.json()));
// }
  
  getAllPensioners() {
    return this.http.get(this.Pensioner_Detail_URL)
      //get body response
    }

  pensionAmount(Aadharr: Number, PensionerDetailsSchema: { headers?: HttpHeaders | { [header: string]: string | string[]; }; context?: HttpContext; observe?: "body"; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; }; reportProgress?: boolean; responseType: "arraybuffer"; withCredentials?: boolean; }) {
    return this.http.get(this.Process_URL, PensionerDetailsSchema)
  }
    
}