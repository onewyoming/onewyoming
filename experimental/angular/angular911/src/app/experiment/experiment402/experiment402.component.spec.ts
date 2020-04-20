import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment402Component } from './experiment402.component';

describe('Experiment402Component', () => {
  let component: Experiment402Component;
  let fixture: ComponentFixture<Experiment402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
