import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment359Component } from './experiment359.component';

describe('Experiment359Component', () => {
  let component: Experiment359Component;
  let fixture: ComponentFixture<Experiment359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
