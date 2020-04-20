import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment713Component } from './experiment713.component';

describe('Experiment713Component', () => {
  let component: Experiment713Component;
  let fixture: ComponentFixture<Experiment713Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment713Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
