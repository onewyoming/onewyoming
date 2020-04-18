import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment743Component } from './experiment743.component';

describe('Experiment743Component', () => {
  let component: Experiment743Component;
  let fixture: ComponentFixture<Experiment743Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment743Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment743Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
