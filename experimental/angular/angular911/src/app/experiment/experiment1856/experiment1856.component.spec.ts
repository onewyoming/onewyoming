import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1856Component } from './experiment1856.component';

describe('Experiment1856Component', () => {
  let component: Experiment1856Component;
  let fixture: ComponentFixture<Experiment1856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
