import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment585Component } from './experiment585.component';

describe('Experiment585Component', () => {
  let component: Experiment585Component;
  let fixture: ComponentFixture<Experiment585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
