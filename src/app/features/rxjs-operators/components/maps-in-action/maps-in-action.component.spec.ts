import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsInActionComponent } from './maps-in-action.component';

describe('MapsInActionComponent', () => {
  let component: MapsInActionComponent;
  let fixture: ComponentFixture<MapsInActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapsInActionComponent]
    });
    fixture = TestBed.createComponent(MapsInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
