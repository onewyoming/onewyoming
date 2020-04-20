import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment538Component } from './experiment538.component';

describe('Experiment538Component', () => {
  let component: Experiment538Component;
  let fixture: ComponentFixture<Experiment538Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment538Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment538Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
