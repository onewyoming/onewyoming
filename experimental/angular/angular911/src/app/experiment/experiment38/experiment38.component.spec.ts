import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment38Component } from './experiment38.component';

describe('Experiment38Component', () => {
  let component: Experiment38Component;
  let fixture: ComponentFixture<Experiment38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment38Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
