import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Experiment600Component } from './experiment600.component';

describe('Experiment600Component', () => {
  let component: Experiment600Component;
  let fixture: ComponentFixture<Experiment600Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Experiment600Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Experiment600Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
