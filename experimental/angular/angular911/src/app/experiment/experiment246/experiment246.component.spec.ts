import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment246Component } from './experiment246.component';

describe('Experiment246Component', () => {
  let component: Experiment246Component;
  let fixture: ComponentFixture<Experiment246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
