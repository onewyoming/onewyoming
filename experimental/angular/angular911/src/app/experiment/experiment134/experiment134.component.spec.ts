import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment134Component } from './experiment134.component';

describe('Experiment134Component', () => {
  let component: Experiment134Component;
  let fixture: ComponentFixture<Experiment134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
