import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment768Component } from './experiment768.component';

describe('Experiment768Component', () => {
  let component: Experiment768Component;
  let fixture: ComponentFixture<Experiment768Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment768Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment768Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
