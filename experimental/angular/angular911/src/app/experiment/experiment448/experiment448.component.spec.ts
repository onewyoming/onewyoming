import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment448Component } from './experiment448.component';

describe('Experiment448Component', () => {
  let component: Experiment448Component;
  let fixture: ComponentFixture<Experiment448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
