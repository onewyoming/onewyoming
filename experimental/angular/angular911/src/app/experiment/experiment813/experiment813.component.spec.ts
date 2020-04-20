import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment813Component } from './experiment813.component';

describe('Experiment813Component', () => {
  let component: Experiment813Component;
  let fixture: ComponentFixture<Experiment813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
