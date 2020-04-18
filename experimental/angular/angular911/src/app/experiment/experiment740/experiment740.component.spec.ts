import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment740Component } from './experiment740.component';

describe('Experiment740Component', () => {
  let component: Experiment740Component;
  let fixture: ComponentFixture<Experiment740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
