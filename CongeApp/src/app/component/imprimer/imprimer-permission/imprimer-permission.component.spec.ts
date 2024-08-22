import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerPermissionComponent } from './imprimer-permission.component';

describe('ImprimerPermissionComponent', () => {
  let component: ImprimerPermissionComponent;
  let fixture: ComponentFixture<ImprimerPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprimerPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprimerPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
