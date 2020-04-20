import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment16Component } from './experiment16.component';

describe('Experiment16Component', () => {
  let component: Experiment16Component;
  let fixture: ComponentFixture<Experiment16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
