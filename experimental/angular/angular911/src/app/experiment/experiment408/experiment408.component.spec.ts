import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment408Component } from './experiment408.component';

describe('Experiment408Component', () => {
  let component: Experiment408Component;
  let fixture: ComponentFixture<Experiment408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
