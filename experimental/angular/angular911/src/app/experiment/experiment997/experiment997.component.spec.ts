import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment997Component } from './experiment997.component';

describe('Experiment997Component', () => {
  let component: Experiment997Component;
  let fixture: ComponentFixture<Experiment997Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment997Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment997Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
