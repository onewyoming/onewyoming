import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment36Component } from './experiment36.component';

describe('Experiment36Component', () => {
  let component: Experiment36Component;
  let fixture: ComponentFixture<Experiment36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment36Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
