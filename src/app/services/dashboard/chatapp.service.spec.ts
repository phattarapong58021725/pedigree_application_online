import { TestBed, inject } from '@angular/core/testing';

import { ChatappService } from './chatapp.service';

describe('ChatappService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatappService]
    });
  });

  it('should be created', inject([ChatappService], (service: ChatappService) => {
    expect(service).toBeTruthy();
  }));
});
