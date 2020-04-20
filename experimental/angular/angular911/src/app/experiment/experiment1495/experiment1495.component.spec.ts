import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1495Component } from './experiment1495.component';

describe('Experiment1495Component', () => {
  let component: Experiment1495Component;
  let fixture: ComponentFixture<Experiment1495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
