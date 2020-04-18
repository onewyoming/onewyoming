import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1148Component } from './experiment1148.component';

describe('Experiment1148Component', () => {
  let component: Experiment1148Component;
  let fixture: ComponentFixture<Experiment1148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
