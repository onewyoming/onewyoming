import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment41Component } from './experiment41.component';

describe('Experiment41Component', () => {
  let component: Experiment41Component;
  let fixture: ComponentFixture<Experiment41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment41Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
