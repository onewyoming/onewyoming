import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment943Component } from './experiment943.component';

describe('Experiment943Component', () => {
  let component: Experiment943Component;
  let fixture: ComponentFixture<Experiment943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
