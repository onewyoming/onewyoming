import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment1606Component } from './experiment1606.component';

describe('Experiment1606Component', () => {
  let component: Experiment1606Component;
  let fixture: ComponentFixture<Experiment1606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment1606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment1606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
