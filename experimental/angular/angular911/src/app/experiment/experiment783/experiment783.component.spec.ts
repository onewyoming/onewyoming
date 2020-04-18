import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment783Component } from './experiment783.component';

describe('Experiment783Component', () => {
  let component: Experiment783Component;
  let fixture: ComponentFixture<Experiment783Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment783Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment783Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
