import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1989Component } from './experiment1989.component';

describe('Experiment1989Component', () => {
  let component: Experiment1989Component;
  let fixture: ComponentFixture<Experiment1989Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1989Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1989Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
