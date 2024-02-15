import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourepathwayComponent } from './courepathway.component';

describe('CourepathwayComponent', () => {
  let component: CourepathwayComponent;
  let fixture: ComponentFixture<CourepathwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourepathwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourepathwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
