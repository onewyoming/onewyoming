import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment130Component } from './experiment130.component';

describe('Experiment130Component', () => {
  let component: Experiment130Component;
  let fixture: ComponentFixture<Experiment130Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment130Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment130Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
