import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDepartamentComponent } from './button-departament.component';

describe('ButtonDepartamentComponent', () => {
  let component: ButtonDepartamentComponent;
  let fixture: ComponentFixture<ButtonDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonDepartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
