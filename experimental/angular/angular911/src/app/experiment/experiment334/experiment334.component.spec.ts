import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment334Component } from './experiment334.component';

describe('Experiment334Component', () => {
  let component: Experiment334Component;
  let fixture: ComponentFixture<Experiment334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
