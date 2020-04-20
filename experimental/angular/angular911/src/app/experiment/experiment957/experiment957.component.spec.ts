import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment957Component } from './experiment957.component';

describe('Experiment957Component', () => {
  let component: Experiment957Component;
  let fixture: ComponentFixture<Experiment957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
