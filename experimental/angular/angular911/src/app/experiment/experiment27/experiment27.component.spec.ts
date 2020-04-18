import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment27Component } from './experiment27.component';

describe('Experiment27Component', () => {
  let component: Experiment27Component;
  let fixture: ComponentFixture<Experiment27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
