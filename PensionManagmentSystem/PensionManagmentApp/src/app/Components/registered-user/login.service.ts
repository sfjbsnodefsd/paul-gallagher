import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginPensioner } from "./login.model";  



  

@Injectable({ providedIn: "root"})
export class LoginService {
    constructor (private http: HttpClient) {}




login(Aadhaar: number, email:string, password: string,) {

    {
        const pensioner: LoginPensioner = {Aadhaar:Aadhaar,  email:email, password:password, 
                                     }
this.http.post("http://localhost:5000/auth/login", pensioner).subscribe(response => {
    console.log(response)
})
    }
}


}