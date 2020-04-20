import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment517Component } from './experiment517.component';

describe('Experiment517Component', () => {
  let component: Experiment517Component;
  let fixture: ComponentFixture<Experiment517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
