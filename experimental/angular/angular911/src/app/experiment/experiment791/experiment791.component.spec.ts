import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment791Component } from './experiment791.component';

describe('Experiment791Component', () => {
  let component: Experiment791Component;
  let fixture: ComponentFixture<Experiment791Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment791Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment791Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
