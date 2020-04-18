import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment872Component } from './experiment872.component';

describe('Experiment872Component', () => {
  let component: Experiment872Component;
  let fixture: ComponentFixture<Experiment872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
