import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredUserComponentComponent } from './registered-user-component.component';

describe('RegisteredUserComponentComponent', () => {
  let component: RegisteredUserComponentComponent;
  let fixture: ComponentFixture<RegisteredUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisteredUserComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
