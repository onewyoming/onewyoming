import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1664Component } from './experiment1664.component';

describe('Experiment1664Component', () => {
  let component: Experiment1664Component;
  let fixture: ComponentFixture<Experiment1664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
