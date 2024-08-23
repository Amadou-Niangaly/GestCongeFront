import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImpressionPermissionComponent } from './page-impression-permission.component';

describe('PageImpressionPermissionComponent', () => {
  let component: PageImpressionPermissionComponent;
  let fixture: ComponentFixture<PageImpressionPermissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImpressionPermissionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageImpressionPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
