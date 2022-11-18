import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pensioner } from "./user-form.model";

@Injectable({ providedIn: "root"})
export class AuthService {
    constructor (private http: HttpClient) {}
    
    
    
    createPensioner(Aadhaar: number, Name: string, email:string, password: string, Dob: string,
    Pan: number,
    Salary: number,
    Allowances: number,
    SelfOrFamily: string,
    BankName: string, 
    BankNumber: number,
    PublicOrPrivate: string ) {
        const pensioner: Pensioner = {Aadhaar:Aadhaar, Name:Name, email:email, password:password, 
                                      Dob:Dob, Pan:Pan, Salary:Salary,Allowances:Allowances, 
                                      SelfOrFamily:SelfOrFamily, BankName:BankName, BankNumber:BankNumber, PublicOrPrivate:PublicOrPrivate }
this.http.post("http://localhost:5000/auth/reg", pensioner).subscribe(response => {
    console.log(response)
})
    }

}