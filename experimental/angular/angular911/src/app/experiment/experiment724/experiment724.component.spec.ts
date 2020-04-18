import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment724Component } from './experiment724.component';

describe('Experiment724Component', () => {
  let component: Experiment724Component;
  let fixture: ComponentFixture<Experiment724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
