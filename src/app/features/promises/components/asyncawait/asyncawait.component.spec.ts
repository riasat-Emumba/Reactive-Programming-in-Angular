import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncawaitComponent } from './asyncawait.component';

describe('AsyncawaitComponent', () => {
  let component: AsyncawaitComponent;
  let fixture: ComponentFixture<AsyncawaitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsyncawaitComponent]
    });
    fixture = TestBed.createComponent(AsyncawaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
