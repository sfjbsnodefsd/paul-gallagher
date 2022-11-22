import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { request } from "express";
import { PensionQuote } from "./pensionqoute.model";



  

@Injectable({ providedIn: "root"})
export class PensionQuoteService {
    constructor (private http: HttpClient) {}




pensionQuote(Aadhaar: number) {

    {
        const pensionerQuote: PensionQuote = new PensionQuote();
this.http.post("http://localhost:5006/ProcessPension",{"Aadhaar": Aadhaar} ).subscribe(response => {
    console.log(response)
    console.log(pensionerQuote.pension)
   
    
})
    }
}


}