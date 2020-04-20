import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1872Component } from './experiment1872.component';

describe('Experiment1872Component', () => {
  let component: Experiment1872Component;
  let fixture: ComponentFixture<Experiment1872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
