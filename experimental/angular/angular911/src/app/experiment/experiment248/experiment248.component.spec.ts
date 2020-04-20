import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment248Component } from './experiment248.component';

describe('Experiment248Component', () => {
  let component: Experiment248Component;
  let fixture: ComponentFixture<Experiment248Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment248Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment248Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
