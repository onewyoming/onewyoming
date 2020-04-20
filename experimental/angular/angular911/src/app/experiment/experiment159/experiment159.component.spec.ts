import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment159Component } from './experiment159.component';

describe('Experiment159Component', () => {
  let component: Experiment159Component;
  let fixture: ComponentFixture<Experiment159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
