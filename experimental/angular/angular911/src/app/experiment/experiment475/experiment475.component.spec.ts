import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment475Component } from './experiment475.component';

describe('Experiment475Component', () => {
  let component: Experiment475Component;
  let fixture: ComponentFixture<Experiment475Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment475Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment475Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
