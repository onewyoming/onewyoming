import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment552Component } from './experiment552.component';

describe('Experiment552Component', () => {
  let component: Experiment552Component;
  let fixture: ComponentFixture<Experiment552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
