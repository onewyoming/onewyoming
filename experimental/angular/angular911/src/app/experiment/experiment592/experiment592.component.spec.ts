import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment592Component } from './experiment592.component';

describe('Experiment592Component', () => {
  let component: Experiment592Component;
  let fixture: ComponentFixture<Experiment592Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment592Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment592Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
