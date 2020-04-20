import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment143Component } from './experiment143.component';

describe('Experiment143Component', () => {
  let component: Experiment143Component;
  let fixture: ComponentFixture<Experiment143Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment143Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment143Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
