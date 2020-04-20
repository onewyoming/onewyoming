import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment556Component } from './experiment556.component';

describe('Experiment556Component', () => {
  let component: Experiment556Component;
  let fixture: ComponentFixture<Experiment556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
