import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardGuessComponent } from './dashboard-guess.component';

describe('DashboardGuessComponent', () => {
  let component: DashboardGuessComponent;
  let fixture: ComponentFixture<DashboardGuessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardGuessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardGuessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
