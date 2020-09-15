import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignFormlyFormComponent } from './design-formly-form.component';

describe('DesignFormlyFormComponent', () => {
  let component: DesignFormlyFormComponent;
  let fixture: ComponentFixture<DesignFormlyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesignFormlyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesignFormlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
