import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment270Component } from './experiment270.component';

describe('Experiment270Component', () => {
  let component: Experiment270Component;
  let fixture: ComponentFixture<Experiment270Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment270Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment270Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
