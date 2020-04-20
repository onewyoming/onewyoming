import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment91Component } from './experiment91.component';

describe('Experiment91Component', () => {
  let component: Experiment91Component;
  let fixture: ComponentFixture<Experiment91Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment91Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment91Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
