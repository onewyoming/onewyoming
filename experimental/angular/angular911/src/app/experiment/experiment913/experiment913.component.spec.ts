import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment913Component } from './experiment913.component';

describe('Experiment913Component', () => {
  let component: Experiment913Component;
  let fixture: ComponentFixture<Experiment913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
