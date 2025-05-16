import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListDepartmentComponent } from './data-list-department.component';

describe('DataListDepartmentComponent', () => {
  let component: DataListDepartmentComponent;
  let fixture: ComponentFixture<DataListDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataListDepartmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataListDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
