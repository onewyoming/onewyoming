import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment916Component } from './experiment916.component';

describe('Experiment916Component', () => {
  let component: Experiment916Component;
  let fixture: ComponentFixture<Experiment916Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment916Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment916Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
