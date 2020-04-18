import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment812Component } from './experiment812.component';

describe('Experiment812Component', () => {
  let component: Experiment812Component;
  let fixture: ComponentFixture<Experiment812Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment812Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment812Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
