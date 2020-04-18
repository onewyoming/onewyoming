import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1936Component } from './experiment1936.component';

describe('Experiment1936Component', () => {
  let component: Experiment1936Component;
  let fixture: ComponentFixture<Experiment1936Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1936Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1936Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
