import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/Services/register.service';
import { Pensioner } from '../user-form/user-form.model';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {
 pensioner: Pensioner[] =[]
 private pensionerSub: Subscription

  
constructor(public registerPensioner: RegisterService) {}

  ngOnInit(){
    this.pensioner = this.registerPensioner.getPensioner();
    this.pensionerSub = this.registerPensioner.getPensionerUpdatedListener()
    .subscribe((pensioner: Pensioner[]) => {
      this.pensioner = pensioner;

    });
  }
ngOnDestroy(){
  this.pensionerSub.unsubscribe();
    
}
}

