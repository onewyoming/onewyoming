import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1351Component } from './experiment1351.component';

describe('Experiment1351Component', () => {
  let component: Experiment1351Component;
  let fixture: ComponentFixture<Experiment1351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
