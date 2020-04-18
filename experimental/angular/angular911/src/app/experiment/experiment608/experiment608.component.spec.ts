import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment608Component } from './experiment608.component';

describe('Experiment608Component', () => {
  let component: Experiment608Component;
  let fixture: ComponentFixture<Experiment608Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment608Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment608Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
