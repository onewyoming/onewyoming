import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment78Component } from './experiment78.component';

describe('Experiment78Component', () => {
  let component: Experiment78Component;
  let fixture: ComponentFixture<Experiment78Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment78Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment78Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
