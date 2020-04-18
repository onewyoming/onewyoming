import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment458Component } from './experiment458.component';

describe('Experiment458Component', () => {
  let component: Experiment458Component;
  let fixture: ComponentFixture<Experiment458Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment458Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
