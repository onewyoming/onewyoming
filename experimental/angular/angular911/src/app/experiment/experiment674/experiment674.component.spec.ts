import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment674Component } from './experiment674.component';

describe('Experiment674Component', () => {
  let component: Experiment674Component;
  let fixture: ComponentFixture<Experiment674Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment674Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment674Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
