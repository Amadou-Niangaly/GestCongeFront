import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImpressionCongeComponent } from './page-impression-conge.component';

describe('PageImpressionCongeComponent', () => {
  let component: PageImpressionCongeComponent;
  let fixture: ComponentFixture<PageImpressionCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImpressionCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageImpressionCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
