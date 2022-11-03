import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionQuoteComponent } from './pension-quote.component';

describe('PensionQuoteComponent', () => {
  let component: PensionQuoteComponent;
  let fixture: ComponentFixture<PensionQuoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionQuoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
