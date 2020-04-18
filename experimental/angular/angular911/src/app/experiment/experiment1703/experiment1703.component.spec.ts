import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1703Component } from './experiment1703.component';

describe('Experiment1703Component', () => {
  let component: Experiment1703Component;
  let fixture: ComponentFixture<Experiment1703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
