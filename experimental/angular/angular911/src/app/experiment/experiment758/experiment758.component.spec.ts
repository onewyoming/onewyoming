import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment758Component } from './experiment758.component';

describe('Experiment758Component', () => {
  let component: Experiment758Component;
  let fixture: ComponentFixture<Experiment758Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment758Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment758Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
