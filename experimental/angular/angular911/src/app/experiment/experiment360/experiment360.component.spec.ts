import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment360Component } from './experiment360.component';

describe('Experiment360Component', () => {
  let component: Experiment360Component;
  let fixture: ComponentFixture<Experiment360Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment360Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment360Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
