import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment579Component } from './experiment579.component';

describe('Experiment579Component', () => {
  let component: Experiment579Component;
  let fixture: ComponentFixture<Experiment579Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment579Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment579Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
