import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment710Component } from './experiment710.component';

describe('Experiment710Component', () => {
  let component: Experiment710Component;
  let fixture: ComponentFixture<Experiment710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
