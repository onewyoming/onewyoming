import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment627Component } from './experiment627.component';

describe('Experiment627Component', () => {
  let component: Experiment627Component;
  let fixture: ComponentFixture<Experiment627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
