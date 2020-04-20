import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment727Component } from './experiment727.component';

describe('Experiment727Component', () => {
  let component: Experiment727Component;
  let fixture: ComponentFixture<Experiment727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
