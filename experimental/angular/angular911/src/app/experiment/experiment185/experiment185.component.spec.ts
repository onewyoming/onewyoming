import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment185Component } from './experiment185.component';

describe('Experiment185Component', () => {
  let component: Experiment185Component;
  let fixture: ComponentFixture<Experiment185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
