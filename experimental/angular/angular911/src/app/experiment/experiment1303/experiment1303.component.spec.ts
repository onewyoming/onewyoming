import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1303Component } from './experiment1303.component';

describe('Experiment1303Component', () => {
  let component: Experiment1303Component;
  let fixture: ComponentFixture<Experiment1303Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1303Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1303Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
