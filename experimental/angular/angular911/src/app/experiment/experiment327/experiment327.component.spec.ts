import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment327Component } from './experiment327.component';

describe('Experiment327Component', () => {
  let component: Experiment327Component;
  let fixture: ComponentFixture<Experiment327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
