import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment212Component } from './experiment212.component';

describe('Experiment212Component', () => {
  let component: Experiment212Component;
  let fixture: ComponentFixture<Experiment212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
