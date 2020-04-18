import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment490Component } from './experiment490.component';

describe('Experiment490Component', () => {
  let component: Experiment490Component;
  let fixture: ComponentFixture<Experiment490Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment490Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment490Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
