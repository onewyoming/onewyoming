import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment35Component } from './experiment35.component';

describe('Experiment35Component', () => {
  let component: Experiment35Component;
  let fixture: ComponentFixture<Experiment35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
