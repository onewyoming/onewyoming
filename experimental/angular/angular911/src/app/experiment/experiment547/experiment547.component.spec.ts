import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment547Component } from './experiment547.component';

describe('Experiment547Component', () => {
  let component: Experiment547Component;
  let fixture: ComponentFixture<Experiment547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
