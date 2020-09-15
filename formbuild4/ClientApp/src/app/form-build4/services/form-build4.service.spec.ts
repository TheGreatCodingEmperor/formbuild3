import { TestBed } from '@angular/core/testing';

import { FormBuild4Service } from './form-build4.service';

describe('FormBuild4Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormBuild4Service = TestBed.get(FormBuild4Service);
    expect(service).toBeTruthy();
  });
});
