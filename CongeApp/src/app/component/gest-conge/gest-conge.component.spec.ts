import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestCongeComponent } from './gest-conge.component';

describe('GestCongeComponent', () => {
  let component: GestCongeComponent;
  let fixture: ComponentFixture<GestCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
