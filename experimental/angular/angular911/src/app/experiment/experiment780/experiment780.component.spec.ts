import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment780Component } from './experiment780.component';

describe('Experiment780Component', () => {
  let component: Experiment780Component;
  let fixture: ComponentFixture<Experiment780Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment780Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment780Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
