import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment60Component } from './experiment60.component';

describe('Experiment60Component', () => {
  let component: Experiment60Component;
  let fixture: ComponentFixture<Experiment60Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment60Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment60Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
