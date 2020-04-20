import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment572Component } from './experiment572.component';

describe('Experiment572Component', () => {
  let component: Experiment572Component;
  let fixture: ComponentFixture<Experiment572Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment572Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment572Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
