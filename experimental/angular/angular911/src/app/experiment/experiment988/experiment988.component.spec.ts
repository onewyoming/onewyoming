import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment988Component } from './experiment988.component';

describe('Experiment988Component', () => {
  let component: Experiment988Component;
  let fixture: ComponentFixture<Experiment988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
