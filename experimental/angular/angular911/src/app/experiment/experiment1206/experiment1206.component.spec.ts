import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1206Component } from './experiment1206.component';

describe('Experiment1206Component', () => {
  let component: Experiment1206Component;
  let fixture: ComponentFixture<Experiment1206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
