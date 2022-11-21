import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { request } from "express";
import { PensionQuote } from "./pensionqoute.model";



  

@Injectable({ providedIn: "root"})
export class PensionQuoteService {
    constructor (private http: HttpClient) {}




pensionQuote(Aadhaar: Number) {

    {
        const pensionerQuote: PensionQuote = {Aadhaar: Aadhaar}
this.http.post("http://localhost:5006/ProcessPension/:aadhaar", pensionerQuote ).subscribe(response => {
    console.log(response)
   
    
})
    }
}


}