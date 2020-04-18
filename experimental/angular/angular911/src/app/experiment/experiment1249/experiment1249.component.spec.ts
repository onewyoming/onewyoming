import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1249Component } from './experiment1249.component';

describe('Experiment1249Component', () => {
  let component: Experiment1249Component;
  let fixture: ComponentFixture<Experiment1249Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1249Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1249Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
