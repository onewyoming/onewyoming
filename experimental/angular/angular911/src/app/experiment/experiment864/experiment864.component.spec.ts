import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment864Component } from './experiment864.component';

describe('Experiment864Component', () => {
  let component: Experiment864Component;
  let fixture: ComponentFixture<Experiment864Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment864Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment864Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
