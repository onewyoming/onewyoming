import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1849Component } from './experiment1849.component';

describe('Experiment1849Component', () => {
  let component: Experiment1849Component;
  let fixture: ComponentFixture<Experiment1849Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1849Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1849Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
