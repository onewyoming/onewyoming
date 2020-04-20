import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment628Component } from './experiment628.component';

describe('Experiment628Component', () => {
  let component: Experiment628Component;
  let fixture: ComponentFixture<Experiment628Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment628Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment628Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
