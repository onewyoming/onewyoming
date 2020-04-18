import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment221Component } from './experiment221.component';

describe('Experiment221Component', () => {
  let component: Experiment221Component;
  let fixture: ComponentFixture<Experiment221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
