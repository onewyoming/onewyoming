import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment973Component } from './experiment973.component';

describe('Experiment973Component', () => {
  let component: Experiment973Component;
  let fixture: ComponentFixture<Experiment973Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment973Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
