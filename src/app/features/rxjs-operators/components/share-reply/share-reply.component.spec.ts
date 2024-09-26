import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareReplyComponent } from './share-reply.component';

describe('ShareReplyComponent', () => {
  let component: ShareReplyComponent;
  let fixture: ComponentFixture<ShareReplyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareReplyComponent]
    });
    fixture = TestBed.createComponent(ShareReplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
