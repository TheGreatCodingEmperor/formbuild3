import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeFormlyFormComponent } from './runtime-formly-form.component';

describe('RuntimeFormlyFormComponent', () => {
  let component: RuntimeFormlyFormComponent;
  let fixture: ComponentFixture<RuntimeFormlyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimeFormlyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeFormlyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
