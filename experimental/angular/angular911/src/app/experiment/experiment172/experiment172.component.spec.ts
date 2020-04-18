import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment172Component } from './experiment172.component';

describe('Experiment172Component', () => {
  let component: Experiment172Component;
  let fixture: ComponentFixture<Experiment172Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment172Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment172Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
