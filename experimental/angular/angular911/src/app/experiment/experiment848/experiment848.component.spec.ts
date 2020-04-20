import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment848Component } from './experiment848.component';

describe('Experiment848Component', () => {
  let component: Experiment848Component;
  let fixture: ComponentFixture<Experiment848Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment848Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment848Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
