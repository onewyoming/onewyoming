import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1690Component } from './experiment1690.component';

describe('Experiment1690Component', () => {
  let component: Experiment1690Component;
  let fixture: ComponentFixture<Experiment1690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
