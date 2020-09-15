import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFieldGroupComponent } from './formly-field-group.component';

describe('FormlyFieldGroupComponent', () => {
  let component: FormlyFieldGroupComponent;
  let fixture: ComponentFixture<FormlyFieldGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormlyFieldGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormlyFieldGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
