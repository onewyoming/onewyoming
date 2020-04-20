import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1274Component } from './experiment1274.component';

describe('Experiment1274Component', () => {
  let component: Experiment1274Component;
  let fixture: ComponentFixture<Experiment1274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
