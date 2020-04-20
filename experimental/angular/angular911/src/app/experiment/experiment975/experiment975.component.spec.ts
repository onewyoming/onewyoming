import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment975Component } from './experiment975.component';

describe('Experiment975Component', () => {
  let component: Experiment975Component;
  let fixture: ComponentFixture<Experiment975Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment975Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment975Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
