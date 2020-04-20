import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment62Component } from './experiment62.component';

describe('Experiment62Component', () => {
  let component: Experiment62Component;
  let fixture: ComponentFixture<Experiment62Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment62Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment62Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
