import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment409Component } from './experiment409.component';

describe('Experiment409Component', () => {
  let component: Experiment409Component;
  let fixture: ComponentFixture<Experiment409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
