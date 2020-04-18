import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment156Component } from './experiment156.component';

describe('Experiment156Component', () => {
  let component: Experiment156Component;
  let fixture: ComponentFixture<Experiment156Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment156Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
