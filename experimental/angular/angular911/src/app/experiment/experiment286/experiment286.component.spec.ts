import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment286Component } from './experiment286.component';

describe('Experiment286Component', () => {
  let component: Experiment286Component;
  let fixture: ComponentFixture<Experiment286Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment286Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment286Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
