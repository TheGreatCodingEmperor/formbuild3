import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupControlPanelComponent } from './group-control-panel.component';

describe('GroupControlPanelComponent', () => {
  let component: GroupControlPanelComponent;
  let fixture: ComponentFixture<GroupControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
