import { TestBed } from '@angular/core/testing';

import { CoolLibraryService } from './cool-library.service';

describe('CoolLibraryService', () => {
  let service: CoolLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoolLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
