import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment779Component } from './experiment779.component';

describe('Experiment779Component', () => {
  let component: Experiment779Component;
  let fixture: ComponentFixture<Experiment779Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment779Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment779Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
