import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConatinerDataTableComponent } from './conatiner-data-table.component';

describe('ConatinerDataTableComponent', () => {
  let component: ConatinerDataTableComponent;
  let fixture: ComponentFixture<ConatinerDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConatinerDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConatinerDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
