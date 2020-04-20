import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment63Component } from './experiment63.component';

describe('Experiment63Component', () => {
  let component: Experiment63Component;
  let fixture: ComponentFixture<Experiment63Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment63Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment63Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
