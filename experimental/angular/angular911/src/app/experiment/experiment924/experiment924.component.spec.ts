import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment924Component } from './experiment924.component';

describe('Experiment924Component', () => {
  let component: Experiment924Component;
  let fixture: ComponentFixture<Experiment924Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment924Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment924Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
