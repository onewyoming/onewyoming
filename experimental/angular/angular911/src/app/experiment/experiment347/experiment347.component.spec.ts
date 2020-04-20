import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment347Component } from './experiment347.component';

describe('Experiment347Component', () => {
  let component: Experiment347Component;
  let fixture: ComponentFixture<Experiment347Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment347Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment347Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
