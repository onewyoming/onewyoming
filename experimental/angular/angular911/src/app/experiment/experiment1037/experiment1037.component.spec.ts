import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1037Component } from './experiment1037.component';

describe('Experiment1037Component', () => {
  let component: Experiment1037Component;
  let fixture: ComponentFixture<Experiment1037Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1037Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1037Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
