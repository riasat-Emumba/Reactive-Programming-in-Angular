import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotocardComponent } from './photocard.component';

describe('PhotocardComponent', () => {
  let component: PhotocardComponent;
  let fixture: ComponentFixture<PhotocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotocardComponent]
    });
    fixture = TestBed.createComponent(PhotocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
