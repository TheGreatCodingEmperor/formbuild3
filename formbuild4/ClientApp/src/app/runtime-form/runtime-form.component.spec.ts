import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuntimeFormComponent } from './runtime-form.component';

describe('RuntimeFormComponent', () => {
  let component: RuntimeFormComponent;
  let fixture: ComponentFixture<RuntimeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuntimeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuntimeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
