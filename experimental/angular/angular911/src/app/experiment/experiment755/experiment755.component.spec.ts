import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment755Component } from './experiment755.component';

describe('Experiment755Component', () => {
  let component: Experiment755Component;
  let fixture: ComponentFixture<Experiment755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
