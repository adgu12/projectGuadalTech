import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBecariosComponent } from './list-becarios.component';

describe('ListBecariosComponent', () => {
  let component: ListBecariosComponent;
  let fixture: ComponentFixture<ListBecariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBecariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBecariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
