import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment551Component } from './experiment551.component';

describe('Experiment551Component', () => {
  let component: Experiment551Component;
  let fixture: ComponentFixture<Experiment551Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment551Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment551Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
