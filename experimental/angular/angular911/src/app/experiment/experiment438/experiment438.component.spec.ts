import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment438Component } from './experiment438.component';

describe('Experiment438Component', () => {
  let component: Experiment438Component;
  let fixture: ComponentFixture<Experiment438Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment438Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment438Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
