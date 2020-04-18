import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment805Component } from './experiment805.component';

describe('Experiment805Component', () => {
  let component: Experiment805Component;
  let fixture: ComponentFixture<Experiment805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
