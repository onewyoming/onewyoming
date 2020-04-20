import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1949Component } from './experiment1949.component';

describe('Experiment1949Component', () => {
  let component: Experiment1949Component;
  let fixture: ComponentFixture<Experiment1949Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1949Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1949Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
