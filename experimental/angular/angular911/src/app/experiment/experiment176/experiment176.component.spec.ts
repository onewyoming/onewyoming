import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment176Component } from './experiment176.component';

describe('Experiment176Component', () => {
  let component: Experiment176Component;
  let fixture: ComponentFixture<Experiment176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
