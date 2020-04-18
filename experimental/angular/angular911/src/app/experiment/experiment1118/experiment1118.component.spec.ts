import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1118Component } from './experiment1118.component';

describe('Experiment1118Component', () => {
  let component: Experiment1118Component;
  let fixture: ComponentFixture<Experiment1118Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1118Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1118Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
