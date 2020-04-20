import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment575Component } from './experiment575.component';

describe('Experiment575Component', () => {
  let component: Experiment575Component;
  let fixture: ComponentFixture<Experiment575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
