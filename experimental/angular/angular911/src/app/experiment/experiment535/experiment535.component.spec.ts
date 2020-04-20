import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment535Component } from './experiment535.component';

describe('Experiment535Component', () => {
  let component: Experiment535Component;
  let fixture: ComponentFixture<Experiment535Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment535Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment535Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
