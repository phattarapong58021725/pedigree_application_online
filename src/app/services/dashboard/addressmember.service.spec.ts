import { TestBed, inject } from '@angular/core/testing';

import { AddressmemberService } from './addressmember.service';

describe('AddressmemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddressmemberService]
    });
  });

  it('should be created', inject([AddressmemberService], (service: AddressmemberService) => {
    expect(service).toBeTruthy();
  }));
});
