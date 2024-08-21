import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestPermissionComponent } from './gest-permission.component';

describe('GestPermissionComponent', () => {
  let component: GestPermissionComponent;
  let fixture: ComponentFixture<GestPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
