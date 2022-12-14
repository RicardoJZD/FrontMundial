import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartidosComponent } from './form-partidos.component';

describe('FormPartidosComponent', () => {
  let component: FormPartidosComponent;
  let fixture: ComponentFixture<FormPartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPartidosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormPartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
