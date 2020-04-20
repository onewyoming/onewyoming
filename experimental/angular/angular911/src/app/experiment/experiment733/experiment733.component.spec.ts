import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment733Component } from './experiment733.component';

describe('Experiment733Component', () => {
  let component: Experiment733Component;
  let fixture: ComponentFixture<Experiment733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
