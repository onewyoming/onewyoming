import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment597Component } from './experiment597.component';

describe('Experiment597Component', () => {
  let component: Experiment597Component;
  let fixture: ComponentFixture<Experiment597Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment597Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment597Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
