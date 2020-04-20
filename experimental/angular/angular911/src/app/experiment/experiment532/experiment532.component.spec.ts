import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment532Component } from './experiment532.component';

describe('Experiment532Component', () => {
  let component: Experiment532Component;
  let fixture: ComponentFixture<Experiment532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
