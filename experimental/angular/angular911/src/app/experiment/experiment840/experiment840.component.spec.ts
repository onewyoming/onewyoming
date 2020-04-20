import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment840Component } from './experiment840.component';

describe('Experiment840Component', () => {
  let component: Experiment840Component;
  let fixture: ComponentFixture<Experiment840Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment840Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment840Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
