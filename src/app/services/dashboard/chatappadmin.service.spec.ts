import { TestBed, inject } from '@angular/core/testing';

import { ChatappadminService } from './chatappadmin.service';

describe('ChatappadminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatappadminService]
    });
  });

  it('should be created', inject([ChatappadminService], (service: ChatappadminService) => {
    expect(service).toBeTruthy();
  }));
});
