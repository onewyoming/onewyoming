import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment501Component } from './experiment501.component';

describe('Experiment501Component', () => {
  let component: Experiment501Component;
  let fixture: ComponentFixture<Experiment501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
