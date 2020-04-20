import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment245Component } from './experiment245.component';

describe('Experiment245Component', () => {
  let component: Experiment245Component;
  let fixture: ComponentFixture<Experiment245Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment245Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
