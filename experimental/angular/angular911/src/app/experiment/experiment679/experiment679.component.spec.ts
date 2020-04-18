import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment679Component } from './experiment679.component';

describe('Experiment679Component', () => {
  let component: Experiment679Component;
  let fixture: ComponentFixture<Experiment679Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment679Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment679Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
