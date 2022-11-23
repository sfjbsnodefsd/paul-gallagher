import { HttpClient, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { request } from "express";
import { PensionDetails } from "./pensionDisplay.model";
import { PensionQuote } from "./pensionqoute.model";





@Injectable({ providedIn: "root" })
export class PensionQuoteService {
    constructor(private http: HttpClient) { }

    pensionerDetails: PensionDetails[] = []




    pensionQuote(Aadhaar: number) {

    
            return this.http.post("http://localhost:5006/ProcessPension", { "Aadhaar": Aadhaar }).subscribe((response) => {
                console.log("this is your", response)
            this.pensionerDetails = response as PensionDetails[]


            })
        
    }


}