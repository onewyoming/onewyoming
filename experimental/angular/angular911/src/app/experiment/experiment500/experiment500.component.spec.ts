import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment500Component } from './experiment500.component';

describe('Experiment500Component', () => {
  let component: Experiment500Component;
  let fixture: ComponentFixture<Experiment500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
