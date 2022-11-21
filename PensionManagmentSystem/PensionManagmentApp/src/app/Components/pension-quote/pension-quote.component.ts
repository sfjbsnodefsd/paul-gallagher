import { Component, OnInit } from '@angular/core';
import { PensionQuoteService } from './pensionquote.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-pension-quote',
  templateUrl: './pension-quote.component.html',
  styleUrls: ['./pension-quote.component.css']
})
export class PensionQuoteComponent implements OnInit {

  constructor(public pensionerQuote: PensionQuoteService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return
    }this.pensionerQuote.pensionQuote(form.value.Aadhaar,)
    
    }
  
    display(details: any) {
      console.log(details)
    }}


