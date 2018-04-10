import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceStatsComponent } from './interface-stats.component';

describe('InterfaceStatsComponent', () => {
  let component: InterfaceStatsComponent;
  let fixture: ComponentFixture<InterfaceStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterfaceStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterfaceStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
