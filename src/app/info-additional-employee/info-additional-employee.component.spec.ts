import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdditionalEmployeeComponent } from './info-additional-employee.component';

describe('InfoAdditionalEmployeeComponent', () => {
  let component: InfoAdditionalEmployeeComponent;
  let fixture: ComponentFixture<InfoAdditionalEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoAdditionalEmployeeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoAdditionalEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
