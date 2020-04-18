import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment447Component } from './experiment447.component';

describe('Experiment447Component', () => {
  let component: Experiment447Component;
  let fixture: ComponentFixture<Experiment447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
