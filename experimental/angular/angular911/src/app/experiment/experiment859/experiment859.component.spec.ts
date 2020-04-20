import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment859Component } from './experiment859.component';

describe('Experiment859Component', () => {
  let component: Experiment859Component;
  let fixture: ComponentFixture<Experiment859Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment859Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment859Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
