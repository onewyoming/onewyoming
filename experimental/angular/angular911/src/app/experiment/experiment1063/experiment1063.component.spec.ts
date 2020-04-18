import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1063Component } from './experiment1063.component';

describe('Experiment1063Component', () => {
  let component: Experiment1063Component;
  let fixture: ComponentFixture<Experiment1063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
