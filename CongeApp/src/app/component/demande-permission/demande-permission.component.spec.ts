import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePermissionComponent } from './demande-permission.component';

describe('DemandePermissionComponent', () => {
  let component: DemandePermissionComponent;
  let fixture: ComponentFixture<DemandePermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandePermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemandePermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
