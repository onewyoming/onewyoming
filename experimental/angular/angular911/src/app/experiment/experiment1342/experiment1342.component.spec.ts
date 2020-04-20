import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1342Component } from './experiment1342.component';

describe('Experiment1342Component', () => {
  let component: Experiment1342Component;
  let fixture: ComponentFixture<Experiment1342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
