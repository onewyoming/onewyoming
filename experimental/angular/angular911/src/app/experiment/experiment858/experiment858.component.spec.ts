import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment858Component } from './experiment858.component';

describe('Experiment858Component', () => {
  let component: Experiment858Component;
  let fixture: ComponentFixture<Experiment858Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment858Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment858Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
