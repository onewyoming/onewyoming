import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment289Component } from './experiment289.component';

describe('Experiment289Component', () => {
  let component: Experiment289Component;
  let fixture: ComponentFixture<Experiment289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
