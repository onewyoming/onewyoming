import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment847Component } from './experiment847.component';

describe('Experiment847Component', () => {
  let component: Experiment847Component;
  let fixture: ComponentFixture<Experiment847Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment847Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment847Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
