import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFormlyFieldComponent } from './design-formly-field.component';

describe('DesignFormlyFieldComponent', () => {
  let component: DesignFormlyFieldComponent;
  let fixture: ComponentFixture<DesignFormlyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignFormlyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignFormlyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
