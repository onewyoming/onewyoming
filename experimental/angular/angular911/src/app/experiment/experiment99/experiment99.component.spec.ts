import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment99Component } from './experiment99.component';

describe('Experiment99Component', () => {
  let component: Experiment99Component;
  let fixture: ComponentFixture<Experiment99Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment99Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment99Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
