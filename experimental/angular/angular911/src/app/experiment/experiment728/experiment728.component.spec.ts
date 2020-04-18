import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment728Component } from './experiment728.component';

describe('Experiment728Component', () => {
  let component: Experiment728Component;
  let fixture: ComponentFixture<Experiment728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
