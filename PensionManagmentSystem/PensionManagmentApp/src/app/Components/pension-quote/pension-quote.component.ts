import { Component, OnInit } from '@angular/core';
import { PensionQuoteService } from './pensionquote.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pension-quote',
  templateUrl: './pension-quote.component.html',
  styleUrls: ['./pension-quote.component.css']
})
export class PensionQuoteComponent  {

  constructor(public pensionerQuote: PensionQuoteService) { }



  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    } this.pensionerQuote.pensionQuote(form.value.Aadhaar)
    console.log(form.value.Aadhaar)
    
    }
  
    display(details: any) {
      console.log(details)
    }}

   
