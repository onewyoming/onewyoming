import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment857Component } from './experiment857.component';

describe('Experiment857Component', () => {
  let component: Experiment857Component;
  let fixture: ComponentFixture<Experiment857Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment857Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment857Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
