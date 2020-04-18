import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment140Component } from './experiment140.component';

describe('Experiment140Component', () => {
  let component: Experiment140Component;
  let fixture: ComponentFixture<Experiment140Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment140Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment140Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
