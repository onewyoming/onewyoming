import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment206Component } from './experiment206.component';

describe('Experiment206Component', () => {
  let component: Experiment206Component;
  let fixture: ComponentFixture<Experiment206Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment206Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment206Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
