import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment50Component } from './experiment50.component';

describe('Experiment50Component', () => {
  let component: Experiment50Component;
  let fixture: ComponentFixture<Experiment50Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment50Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment50Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
