import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment422Component } from './experiment422.component';

describe('Experiment422Component', () => {
  let component: Experiment422Component;
  let fixture: ComponentFixture<Experiment422Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment422Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
