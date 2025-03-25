import { TestBed } from '@angular/core/testing';

import { PostMsgService } from './post-msg.service';

describe('PostMsgService', () => {
  let service: PostMsgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostMsgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
