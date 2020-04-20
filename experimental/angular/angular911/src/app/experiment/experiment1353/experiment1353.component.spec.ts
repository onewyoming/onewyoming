import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1353Component } from './experiment1353.component';

describe('Experiment1353Component', () => {
  let component: Experiment1353Component;
  let fixture: ComponentFixture<Experiment1353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
