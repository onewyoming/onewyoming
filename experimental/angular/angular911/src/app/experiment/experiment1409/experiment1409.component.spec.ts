import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1409Component } from './experiment1409.component';

describe('Experiment1409Component', () => {
  let component: Experiment1409Component;
  let fixture: ComponentFixture<Experiment1409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
