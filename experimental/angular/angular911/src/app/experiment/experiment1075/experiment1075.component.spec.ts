import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1075Component } from './experiment1075.component';

describe('Experiment1075Component', () => {
  let component: Experiment1075Component;
  let fixture: ComponentFixture<Experiment1075Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1075Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1075Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
