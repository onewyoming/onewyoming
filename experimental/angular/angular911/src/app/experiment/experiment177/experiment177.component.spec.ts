import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment177Component } from './experiment177.component';

describe('Experiment177Component', () => {
  let component: Experiment177Component;
  let fixture: ComponentFixture<Experiment177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
