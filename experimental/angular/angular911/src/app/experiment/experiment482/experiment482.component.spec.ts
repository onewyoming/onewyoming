import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment482Component } from './experiment482.component';

describe('Experiment482Component', () => {
  let component: Experiment482Component;
  let fixture: ComponentFixture<Experiment482Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment482Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment482Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
