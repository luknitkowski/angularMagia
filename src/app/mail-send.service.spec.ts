import { TestBed } from '@angular/core/testing';

import { MailSendService } from './mail-send.service';

describe('MailSendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailSendService = TestBed.get(MailSendService);
    expect(service).toBeTruthy();
  });
});
