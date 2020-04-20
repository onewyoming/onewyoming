import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment75Component } from './experiment75.component';

describe('Experiment75Component', () => {
  let component: Experiment75Component;
  let fixture: ComponentFixture<Experiment75Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment75Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment75Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
