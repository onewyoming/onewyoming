import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment737Component } from './experiment737.component';

describe('Experiment737Component', () => {
  let component: Experiment737Component;
  let fixture: ComponentFixture<Experiment737Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment737Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment737Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
