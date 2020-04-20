import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment161Component } from './experiment161.component';

describe('Experiment161Component', () => {
  let component: Experiment161Component;
  let fixture: ComponentFixture<Experiment161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
