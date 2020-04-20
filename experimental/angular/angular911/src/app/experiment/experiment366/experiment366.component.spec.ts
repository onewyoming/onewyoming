import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment366Component } from './experiment366.component';

describe('Experiment366Component', () => {
  let component: Experiment366Component;
  let fixture: ComponentFixture<Experiment366Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment366Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment366Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
