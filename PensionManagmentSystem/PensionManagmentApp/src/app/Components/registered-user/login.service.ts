import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LoginPensioner } from "./login.model";  
import { Router } from "@angular/router";
import { Token } from "@angular/compiler";
import { Subject } from "rxjs";


  

@Injectable({ providedIn: "root"})
export class LoginService {
    
    private token: string;
    private authStatusListener = new Subject<boolean>();
    private isAuthenticated = false
   
    constructor (private http: HttpClient, private router: Router) {}

    getToken() {
        return this.token
      }
    
     
      getIsAuth() {
        return this.isAuthenticated
      }


login(Aadhaar: number, email:string, password: string,) {

    
        const pensioner: LoginPensioner = {Aadhaar:Aadhaar,  email:email, password:password}
this.http.post<{token: string}>("http://localhost:5000/auth/login", pensioner).subscribe(res => {
    const token = res.token
    console.log(token)
        this.token = token
       if(token){
           this.authStatusListener.next(true)
           this.isAuthenticated = true
           this.router.navigate(["pensionquote"])
       }

})
    }
}


