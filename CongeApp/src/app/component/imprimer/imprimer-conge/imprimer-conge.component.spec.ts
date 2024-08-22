import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerCongeComponent } from './imprimer-conge.component';

describe('ImprimerCongeComponent', () => {
  let component: ImprimerCongeComponent;
  let fixture: ComponentFixture<ImprimerCongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprimerCongeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprimerCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
