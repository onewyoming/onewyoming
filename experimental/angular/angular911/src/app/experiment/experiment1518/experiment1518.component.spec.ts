import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1518Component } from './experiment1518.component';

describe('Experiment1518Component', () => {
  let component: Experiment1518Component;
  let fixture: ComponentFixture<Experiment1518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
