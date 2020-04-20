import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment395Component } from './experiment395.component';

describe('Experiment395Component', () => {
  let component: Experiment395Component;
  let fixture: ComponentFixture<Experiment395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
