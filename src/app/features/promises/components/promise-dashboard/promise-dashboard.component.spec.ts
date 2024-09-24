import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseDashboardComponent } from './promise-dashboard.component';

describe('PromiseDashboardComponent', () => {
  let component: PromiseDashboardComponent;
  let fixture: ComponentFixture<PromiseDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromiseDashboardComponent]
    });
    fixture = TestBed.createComponent(PromiseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
