import { TestBed } from '@angular/core/testing';

import { ImagesForProjectService } from './images-for-project.service';

describe('ImagesForProjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImagesForProjectService = TestBed.get(ImagesForProjectService);
    expect(service).toBeTruthy();
  });
});
