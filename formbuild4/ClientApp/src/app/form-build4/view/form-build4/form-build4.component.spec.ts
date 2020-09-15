import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuild4Component } from './form-build4.component';

describe('FormBuild4Component', () => {
  let component: FormBuild4Component;
  let fixture: ComponentFixture<FormBuild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBuild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBuild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
