import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment760Component } from './experiment760.component';

describe('Experiment760Component', () => {
  let component: Experiment760Component;
  let fixture: ComponentFixture<Experiment760Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment760Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment760Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
