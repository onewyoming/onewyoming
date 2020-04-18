import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment899Component } from './experiment899.component';

describe('Experiment899Component', () => {
  let component: Experiment899Component;
  let fixture: ComponentFixture<Experiment899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
