import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment279Component } from './experiment279.component';

describe('Experiment279Component', () => {
  let component: Experiment279Component;
  let fixture: ComponentFixture<Experiment279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
