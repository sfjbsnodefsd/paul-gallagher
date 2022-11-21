import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PensionQuote } from "./pensionqoute.model";



  

@Injectable({ providedIn: "root"})
export class PensionQuoteService {
    constructor (private http: HttpClient) {}




pensionQuote(Aadhaar: number, Name:string, password: string,) {

    {
        const pensionerQuote: PensionQuote = {Aadhaar:Aadhaar,  Name: Name, password:password, 
                                     }
this.http.post("http://localhost:5006/ProcessPension/:aadhaar", pensionerQuote).subscribe(response => {
    console.log(response)
})
    }
}


}