import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment403Component } from './experiment403.component';

describe('Experiment403Component', () => {
  let component: Experiment403Component;
  let fixture: ComponentFixture<Experiment403Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment403Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment403Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
