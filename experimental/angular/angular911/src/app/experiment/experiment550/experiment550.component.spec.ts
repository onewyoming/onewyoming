import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment550Component } from './experiment550.component';

describe('Experiment550Component', () => {
  let component: Experiment550Component;
  let fixture: ComponentFixture<Experiment550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
