import { TestBed } from '@angular/core/testing';

import { AddPensionerService } from './add-pensioner.service';

describe('AddPensionerService', () => {
  let service: AddPensionerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPensionerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
