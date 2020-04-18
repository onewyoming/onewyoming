import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1218Component } from './experiment1218.component';

describe('Experiment1218Component', () => {
  let component: Experiment1218Component;
  let fixture: ComponentFixture<Experiment1218Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1218Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1218Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
