import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment196Component } from './experiment196.component';

describe('Experiment196Component', () => {
  let component: Experiment196Component;
  let fixture: ComponentFixture<Experiment196Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment196Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
