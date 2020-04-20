import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1918Component } from './experiment1918.component';

describe('Experiment1918Component', () => {
  let component: Experiment1918Component;
  let fixture: ComponentFixture<Experiment1918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
