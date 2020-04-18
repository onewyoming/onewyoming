import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment33Component } from './experiment33.component';

describe('Experiment33Component', () => {
  let component: Experiment33Component;
  let fixture: ComponentFixture<Experiment33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment33Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
