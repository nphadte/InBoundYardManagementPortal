import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerentryformComponent } from './containerentryform.component';

describe('ContainerentryformComponent', () => {
  let component: ContainerentryformComponent;
  let fixture: ComponentFixture<ContainerentryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerentryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerentryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
