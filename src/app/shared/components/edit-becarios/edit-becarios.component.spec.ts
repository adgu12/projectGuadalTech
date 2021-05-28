import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBecariosComponent } from './edit-becarios.component';

describe('EditBecariosComponent', () => {
  let component: EditBecariosComponent;
  let fixture: ComponentFixture<EditBecariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBecariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
