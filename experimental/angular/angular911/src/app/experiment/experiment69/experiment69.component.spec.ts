import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment69Component } from './experiment69.component';

describe('Experiment69Component', () => {
  let component: Experiment69Component;
  let fixture: ComponentFixture<Experiment69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
