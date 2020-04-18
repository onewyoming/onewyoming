import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment886Component } from './experiment886.component';

describe('Experiment886Component', () => {
  let component: Experiment886Component;
  let fixture: ComponentFixture<Experiment886Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment886Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment886Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
