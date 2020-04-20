import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1681Component } from './experiment1681.component';

describe('Experiment1681Component', () => {
  let component: Experiment1681Component;
  let fixture: ComponentFixture<Experiment1681Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1681Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1681Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
