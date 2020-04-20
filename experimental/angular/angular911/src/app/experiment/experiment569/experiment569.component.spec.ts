import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment569Component } from './experiment569.component';

describe('Experiment569Component', () => {
  let component: Experiment569Component;
  let fixture: ComponentFixture<Experiment569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
