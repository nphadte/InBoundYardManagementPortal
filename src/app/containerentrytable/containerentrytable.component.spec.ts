import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerentrytableComponent } from './containerentrytable.component';

describe('ContainerentrytableComponent', () => {
  let component: ContainerentrytableComponent;
  let fixture: ComponentFixture<ContainerentrytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerentrytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerentrytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
