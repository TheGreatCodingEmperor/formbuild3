import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemControlPanelComponent } from './item-control-panel.component';

describe('ItemControlPanelComponent', () => {
  let component: ItemControlPanelComponent;
  let fixture: ComponentFixture<ItemControlPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemControlPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
