import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareMapsComponent } from './compare-maps.component';

describe('CompareMapsComponent', () => {
  let component: CompareMapsComponent;
  let fixture: ComponentFixture<CompareMapsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareMapsComponent]
    });
    fixture = TestBed.createComponent(CompareMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
