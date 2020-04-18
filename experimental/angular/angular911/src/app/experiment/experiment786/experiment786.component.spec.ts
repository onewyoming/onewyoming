import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment786Component } from './experiment786.component';

describe('Experiment786Component', () => {
  let component: Experiment786Component;
  let fixture: ComponentFixture<Experiment786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
