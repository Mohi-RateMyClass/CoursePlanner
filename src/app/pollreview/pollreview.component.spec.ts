import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PollreviewComponent } from './pollreview.component';

describe('PollreviewComponent', () => {
  let component: PollreviewComponent;
  let fixture: ComponentFixture<PollreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PollreviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PollreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
