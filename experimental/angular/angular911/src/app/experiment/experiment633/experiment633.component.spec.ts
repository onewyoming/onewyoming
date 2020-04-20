import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment633Component } from './experiment633.component';

describe('Experiment633Component', () => {
  let component: Experiment633Component;
  let fixture: ComponentFixture<Experiment633Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment633Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment633Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
