import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment227Component } from './experiment227.component';

describe('Experiment227Component', () => {
  let component: Experiment227Component;
  let fixture: ComponentFixture<Experiment227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
