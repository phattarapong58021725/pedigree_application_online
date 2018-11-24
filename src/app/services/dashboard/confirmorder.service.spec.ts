import { TestBed, inject } from '@angular/core/testing';

import { ConfirmorderService } from './confirmorder.service';

describe('ConfirmorderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmorderService]
    });
  });

  it('should be created', inject([ConfirmorderService], (service: ConfirmorderService) => {
    expect(service).toBeTruthy();
  }));
});
