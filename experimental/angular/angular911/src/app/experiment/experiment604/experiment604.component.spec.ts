import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment604Component } from './experiment604.component';

describe('Experiment604Component', () => {
  let component: Experiment604Component;
  let fixture: ComponentFixture<Experiment604Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment604Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment604Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
