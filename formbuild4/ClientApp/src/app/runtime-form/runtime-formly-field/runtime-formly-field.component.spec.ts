import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeFormlyFieldComponent } from './runtime-formly-field.component';

describe('RuntimeFormlyFieldComponent', () => {
  let component: RuntimeFormlyFieldComponent;
  let fixture: ComponentFixture<RuntimeFormlyFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimeFormlyFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeFormlyFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
