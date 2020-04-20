import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment948Component } from './experiment948.component';

describe('Experiment948Component', () => {
  let component: Experiment948Component;
  let fixture: ComponentFixture<Experiment948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
