import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1394Component } from './experiment1394.component';

describe('Experiment1394Component', () => {
  let component: Experiment1394Component;
  let fixture: ComponentFixture<Experiment1394Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1394Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1394Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
