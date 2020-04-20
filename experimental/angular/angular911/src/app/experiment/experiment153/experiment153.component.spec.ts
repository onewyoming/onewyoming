import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment153Component } from './experiment153.component';

describe('Experiment153Component', () => {
  let component: Experiment153Component;
  let fixture: ComponentFixture<Experiment153Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment153Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment153Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
