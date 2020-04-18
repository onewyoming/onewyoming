import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment966Component } from './experiment966.component';

describe('Experiment966Component', () => {
  let component: Experiment966Component;
  let fixture: ComponentFixture<Experiment966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
