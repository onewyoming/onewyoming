import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1981Component } from './experiment1981.component';

describe('Experiment1981Component', () => {
  let component: Experiment1981Component;
  let fixture: ComponentFixture<Experiment1981Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1981Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1981Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
