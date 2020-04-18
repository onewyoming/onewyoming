import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment511Component } from './experiment511.component';

describe('Experiment511Component', () => {
  let component: Experiment511Component;
  let fixture: ComponentFixture<Experiment511Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment511Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment511Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
