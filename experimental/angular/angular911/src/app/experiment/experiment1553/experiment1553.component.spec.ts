import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1553Component } from './experiment1553.component';

describe('Experiment1553Component', () => {
  let component: Experiment1553Component;
  let fixture: ComponentFixture<Experiment1553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
