import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1821Component } from './experiment1821.component';

describe('Experiment1821Component', () => {
  let component: Experiment1821Component;
  let fixture: ComponentFixture<Experiment1821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
