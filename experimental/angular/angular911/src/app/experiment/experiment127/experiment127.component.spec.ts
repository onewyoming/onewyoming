import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment127Component } from './experiment127.component';

describe('Experiment127Component', () => {
  let component: Experiment127Component;
  let fixture: ComponentFixture<Experiment127Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment127Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment127Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
