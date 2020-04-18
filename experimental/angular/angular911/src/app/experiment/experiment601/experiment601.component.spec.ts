import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment601Component } from './experiment601.component';

describe('Experiment601Component', () => {
  let component: Experiment601Component;
  let fixture: ComponentFixture<Experiment601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
